Vue SSR 实践
作者： 陈君

什么是服务端渲染？首先引用下来自官方的一段介绍。

Vue.js 是构建客户端应用程序的框架。默认情况下，可以在浏览器中输出 Vue 组件，进行生成 DOM 和操作 DOM。然而，也可以将同一个组件渲染为服务器端的 HTML 字符串，将它们直接发送到浏览器，最后将这些静态标记"激活"为客户端上完全可交互的应用程序。
服务器渲染的 Vue.js 应用程序也可以被认为是"同构"或"通用"，因为应用程序的大部分代码都可以在服务器和客户端上运行。

前端发展史就是前端和服务端解耦的过程。最初的服务端模板渲染模式，固然在开发模式和用户体验上，无法比拟单页 spa 应用。但前端渲染业务的通病就是不利于搜索引擎爬虫抓取工具爬取，无资源缓存时过长的首屏时间，js 文件动辄几兆。而 SSR 应用则既满足了现在开发模式和用户体验，又可以首屏直接丢出 html 文件。

核心概念剖析
vue 是如何在服务端渲染的呢，无论是 Nuxtjs 现有框架还是手动搭建，都是基于vue-server-renderer。其源码解构略为复杂，这里我们只做简单介绍。

主要是通过解析 v-node 虚拟 Dom 节点，生成字符串。

// server/render.js
function renderNode (node, isRoot, context) {
  // 文本节点
  if (node.isString) {
    renderStringNode(node, context)
  // 组件节点
  } else if (isDef(node.componentOptions)) {
    renderComponent(node, isRoot, context)
  // 普通标签
  } else if (isDef(node.tag)) {
    renderElement(node, isRoot, context)
  // 注释
  } else if (isTrue(node.isComment)) {
    // 异步组件占位
    if (isDef(node.asyncFactory)) {
      // async component
      renderAsyncComponent(node, isRoot, context)
    } else {
      context.write(`<!--${node.text}-->`, context.next)
    }
  } else {
    context.write(
      node.raw ? node.text : escape(String(node.text)),
      context.next
    )
  }
}

VueSSRClientPlugin/VueSSRServerPlugin

VueSSRServerPlugin 主要就是移除所有的资源类文件，只关注核心 js 逻辑部分。并将所有的 js 合并到 vue-ssr-server-bundle.json.
// VueSSRServerPlugin 主要如下
      // 只提取代码中的js部分文件，不需处理资源类
      stats.assets.forEach(asset => {
        if (asset.name.match(/\.js$/)) {
          bundle.files[asset.name] = compilation.assets[asset.name].source();
        } else if (asset.name.match(/\.js\.map$/)) {
          bundle.maps[asset.name.replace(/\.map$/, '')] = JSON.parse(
            compilation.assets[asset.name].source()
          );
        }
        // do not emit anything else for server
        delete compilation.assets[asset.name];
      });

      const json = JSON.stringify(bundle, null, 2);
      const filename = this.options.filename;

      // 修改输出vue-ssr-server-bundle.json
      compilation.assets[filename] = {
        source: () => json,
        size: () => json.length
      };
VueSSRClientPlugin 主要针对资源生成一个mainfest.json文件,梳理初始化依赖资源，异步资源、通用模块关系，用于在 server 生成 html 字串时，动态的当前页面依赖的资源标签，或者处理为 preload/prefetch 形式加载文件。
// VueSSRClientPlugin 主要如下
      // 生成资源依赖表
      const manifest = {
        publicPath: stats.publicPath,
        all: allFiles,
        initial: initialFiles,
        async: asyncFiles,
        modules: {
          /* [identifier: string]: Array<index: number> */
        }
      };

      // 对所有资源整理
      const assetModules = stats.modules.filter(m => m.assets.length);
      const fileToIndex = file => manifest.all.indexOf(file);
      stats.modules.forEach(m => {
        // ignore modules duplicated in multiple chunks
        if (m.chunks.length === 1) {
          const cid = m.chunks[0];
          const chunk = stats.chunks.find(c => c.id === cid);
          if (!chunk || !chunk.files) {
            return;
          }
          const id = m.identifier.replace(/\s\w+$/, ''); // remove appended hash
          const files = (manifest.modules[hash(id)] = chunk.files.map(
            fileToIndex
          ));
          // find all asset modules associated with the same chunk
          assetModules.forEach(m => {
            if (m.chunks.some(id => id === cid)) {
              files.push.apply(files, m.assets.map(fileToIndex));
            }
          });
        }
      });

      // 输出vue-ssr-client-manifest.json
      const json = JSON.stringify(manifest, null, 2);
      compilation.assets[this.options.filename] = {
        source: () => json,
        size: () => json.length
      };
      cb();

webpack 配置及优化
基本 webpack 的 loader、常用 plugin 配置这里不再叙述。

client.webpack.config.js

代码拆分配置
optimization: {
  splitChunks: {
    // 模块拆分
    cacheGroups: {
      // 超过两次的引用的模块打包为commons
      commons: {
        chunks: 'initial',
        minChunks: 2,
        maxInitialRequests: 5,
        minSize: 0
      },
      // 入口中的模块中引入的第三方modules打包为vendor
      vendor: {
        // 将第三方模块提取出来
        test: /node_modules/,
        chunks: 'initial',
        name: 'vendor',
        priority: 10,
        enforce: true
      },
      // 将所有css合并到同一文件中
      styles: {
        name: 'styles',
        // 这里需要特殊处理，参考如下issue
        // https://github.com/webpack-contrib/mini-css-extract-plugin/issues/113#issuecomment-400083706
        test: module =>
          module.nameForCondition &&
          /\.(s?css|vue)$/.test(module.nameForCondition()) &&
          !/^javascript/.test(module.type),
        chunks: 'all',
        enforce: true,
        priority: 100,
        minChunks: 1,
        reuseExistingChunk: true
      }
    },

    // 文件压缩
    minimizer: [
      // 对所有css文件最小化处理
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessorOptions: {
          safe: true,
          autoprefixer: {
            disable: true
          },
          mergeLonghand: false,
          discardComments: {
            removeAll: true
          }
        },
        canPrint: true
      })
    ]
  }
};
plugins 引入VueSSRClientPlugin。DefinePlugin中需要声明当前环境，以在代码内区分当前执行环境。
    new VueSSRClientPlugin(),

    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        NODE_ENV: process.env.NODE_ENV,
        VUE_ENV: 'client'
      })
    })

server.webpack.config.js

module.exports = merge(baseConfig, {
  // 工作路径
  context: path.resolve(__dirname, '../'),

  // 入口
  entry: './client/entry-server.js',

  output: {
    // 采用node模块规范
    libraryTarget: 'commonjs2',
    // 输出文件名，整个文件将打入mainfest中
    filename: 'server-bundle.js'
  },

  // 执行环境
  target: 'node',

  // source-map，正式环境可设置为none
  devtool: 'source-map',

  plugins: [

    // 同样在代码内注入当前所在环境
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        NODE_ENV: process.env.NODE_ENV,
        VUE_ENV: 'server'
      })
    }),

    new VueSSRServerPlugin()
  ],
  // bundling时忽略css文件，可以提高构建速度 
  externals: nodeExternals({
    whitelist: /\.css$/
  })
});

数据加载
这里必须用到store，以实现数据共享和客户端数据注入
由于js的模块特性，模块内变量相当于闭包变量，且无法重置模块，并且模块输出变量为引用关系，store需隔离处理。
import Vuex, { Store } from 'vuex';
import Vue from 'vue';
import user from './user';

Vue.use(Vuex);

export default function createStore() {
  const modules = {
    user
  };

  return new Store({
    modules
  });
}
这里需要注意在store中初始化注入的模块，如上的user。这些模块也存在引用共享问题。state需与请求隔离。解决方案要么就是参与函数式输出，要么state如同vue组件的data一样，采用函数式使命，避免共享问题
state() {
  return {
    userInfo: null
  }
}

app.js引入

export function createApp() {
  const router = createRouter();

  const store = createStore();

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });

  return { router, app, store };
}

server-entry
import { createApp } from './app';

const noob = () => {};

export default ctx => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp();

    // 用户权限处理，之后会讲到。
    if (ctx.user) {
      store.commit('user/SAVE_USERINFO', ctx.user);
    }
    // 路由跳转至请求url中
    router.push(ctx.url, noob, reject);
    // 跳转完毕
    router.onReady(async () => {
      // 获得路由匹配的组件，可能存在嵌套路由。
      const matchedComponents = router.getMatchedComponents();

      // 若未匹配，则返回404
      if (!matchedComponents.length) {
        return reject({ code: 404 });
      }

      // 注册组件内的异步store模块
      matchedComponents.map(({ storeModule }) => {
        if (storeModule) {
          store.registerModule(storeModule.name, storeModule);
        }
      });

      // 执行组件内async方法
      try {
        await Promise.all(
          matchedComponents.map(({ asyncData }) => {
            return (
              asyncData &&
              asyncData({
                route: router.currentRoute,
                store,
                isServer: true,
                ctx
              })
            );
          })
        );
        // 保存store状态
        ctx.state = store.state;
        // 返回当前的vue实例，计算页面状态
        resolve(app);
      } catch (e) {
        reject(e);
      }
    }, reject);
  });
};

node请求获得渲染结果并返回
try {
      // 调用render
      let html = await renderer.renderToString(ctx);
      res.send(html);
      // eslint-disable-next-line no-console
      console.log(`render-time: ${Date.now() - startTime}ms`);
    } catch (e) {
      if (e) {
        // 404
        if (e.code === 404) {
          return res.render('404');
        }

        // dev mode render error stack page
        if (isProduction) {
          res.render('500');
        } else {
          // eslint-disable-next-line no-console
          console.log(e);
          res.render('stack', { stack: e.stack, url: req.url });
        }
      }
    }

client-entry
import { createApp } from './app';
import LoadingBar from './components/LoadingBar';
import config from '../config';

const { app, router, store } = createApp();

let timer;

router.onReady(initialRoute => {
  // 我们对初始化匹配到的路由组件进行异步store的挂载
  const initMatched = router.getMatchedComponents(initialRoute);
  initMatched.forEach(({ storeModule }) => {
    if (storeModule && typeof storeModule === 'object') {
      store.registerModule(storeModule.name, storeModule);
    }
  });

  /* 在服务端吐出html中，我们会发现其注入window.__INITIAL_STATE__={}
   * 其内容就是ctx.state
   * 在异步store模块挂载完毕后，替换store的内容。
  */
  if (window.__INITIAL_STATE__) {
    // store bind into window and init store state
    (window.store = store).replaceState(window.__INITIAL_STATE__);
  }

  // 我们采用组件阻塞加载页面的策略
  router.beforeResolve(async (to, from, next) => {
    let r = false;
    // 声明ctx，类似服务端的重定向
    const ctx = {
      redirect: path => {
        r = true;
        next(path);
      }
    };
    // 获得匹配到的路由组件
    const matched = router.getMatchedComponents(to);
    // 获得之前匹配的路由组件
    const prevMatched = router.getMatchedComponents(from);
    let diffed = false;

    // 比较差异，获得需更新组件
    const activated = matched.filter((c, i) => {
      return diffed || (diffed = prevMatched[i] !== c);
    });
    // 无路由组件更新直接跳出渲染
    if (!activated.length) {
      return next();
    }

    // 异步模块挂载
    activated.map(({ storeModule }) => {
      if (storeModule && typeof storeModule === 'object') {
        store.registerModule(storeModule.name, storeModule);
      }
    });

    LoadingBar.start({
      color: '#ff0768'
    });

    // 执行匹配到组件的asyncData方法。
    try {
      await Promise.all(
        activated.map(c => {
          if (c.asyncData) {
            return c.asyncData({ store, route: to, ctx, isServer: false });
          }
        })
      );
      timer = setTimeout(() => {
        LoadingBar.finish();
      }, 300);
    } catch (e) {
      // when request error also render view
    }

    if (!r) {
      next();
    }
  });

  // 挂载与root上
  app.$mount(config.root);
});


异步store模块处理
export default {
  asyncData({ store, route }) {
    return store.dispatch('fiction/loadListData', {
      keyword: route.params.keyword
    });
  },

  storeModule: require('@/store/modules/fiction').default,
}
通过而言我们需要在computed中声明，store中state/getters的变量关系，以减少过长的变量取值,，如this.$sotre.state.user.userinfo。可通过mixin实现，一旦是异步store模块依赖，我们可以通过this.state.userinfo直接读取，getters同理。
export default {
  created() {

    if (!this.$store) return;
    const { storeModule: m } = this.$options;
    // 声明 this.state / this.getters
    if (
      m &&
      m.name &&
      !Object.getOwnPropertyDescriptor(this, 'state') &&
      !Object.getOwnPropertyDescriptor(this, 'getters')
    ) {
      this.$sotre.registerModule(m.name, m)

      Object.defineProperty(this, 'state', {
        get: () => {
          return this.$store.state[m.name];
        },

        set: () => {
          if (process.env.NODE_ENV === 'development') {
            throw new Error('please no set state');
          }
        }
      });

      Object.defineProperty(this, 'getters', {
        get: () => {
          return this.$store.getters[m.name];
        },
        set: () => {
          if (process.env.NODE_ENV === 'development') {
            throw new Error('please no set getters');
          }
        }
      });
    }

    // 声明 this.store
    if (!Object.getOwnPropertyDescriptor(this, 'store')) {
      Object.defineProperty(this, 'store', {
        get: () => {
          return this.$store;
        },
        set: () => {
          if (process.env.NODE_ENV === 'development') {
            throw new Error('please no set store');
          }
        }
      });
    }
  }
};


请求器的处理
这里我们采用的axios，在服务端和浏览器端都将调用。通常由于业务需求，我们需要在请求头中携带用户信息，以cookie或者header字段的形式。渲染上下文只在渲染入口文件中注入当前请求信息，依赖模块无法直接读取，只能通过层层函数式传递的形式。entry => app => component => asyncData => store => service => request，这种写法极其繁琐易疏忽，模块耦合度太高。
这里我们采用node的domain模块实现，本身用来做javascript的错误处理，可包裹完全独立的异步上下文。
  // ctx会需经过用户权限校验，判断请求来源的cookies中用户信息的有效性
  const renderDomain = domain.create();
  
  // 我们绑定ctx到domain中
  renderDomain.ctx = ctx;

  renderDomain.run(async () => {
    // render
    ...
  }
之后我们在请求器中通过process.domain读取当前用户的信息，以用来在服务端请求。
// node server will use it to check user, so not use es6 module.
const axios = require('axios');
const isServer = process.env.VUE_ENV === 'server';

axios.interceptors.request.use(
  config => {
    ...
    /**
     *  not use cookie get userinfo.Then we can use http only safely.
     */
    // server-slide
    if (process.domain) {
      // user has been login
      if (process.domain.ctx.login) {
        config.headers.uid = process.domain.ctx.user.uid;
        config.headers.token = process.domain.ctx.user.token;
      }
      // client-slide
    } else {
      const { user } = window.store.state;
      if (user.login) {
        config.headers.uid = user.uid;
        config.headers.token = user.token;
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
...
在客户端请求时，只需要读取store中保存的用户信息，携带请求即可。

重定向的实现
在服务端实例化的路由为抽象路由，vue路由的重定向并不能改变实现类似302的重定向。必须通过修改response的形式，即通过res.redirect的形式实现。而在客户端重定向时vue路由则可以实现重定向。
我们在请求内包裹了ctx对象，实例化并传递于渲染上下文中。并将ctx传递于asyncData中。
module.exports = class Ctx {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }
  // 
  get redirect() {
    return this.res.redirect.bind(this.res);
  }

  get ua() {
    return this.request.reponse('User-Agent');
  }

  get reponse() {
    return this.res;
  }

  get request() {
    return this.req;
  }

  get isPC() {
    return !this.isMobile;
  }

  get isMobile() {
    return /Android|webOS|iPhone|iPad|BlackBerry/i.test(this.ua);
  }

  // @type {boolean} isLogin
  get isLogin() {
    return !!this.req.user;
  }

  // @type {object} userinfo
  get user() {
    return this.req.user;
  }
};
接下来，我们在asyncData中便可触发页面的重定向。
export default {
  asyncData({ctx, store}) {
    if (!store.state.user.login) {
      return ctx.redirect('/')
    }
  }
}
