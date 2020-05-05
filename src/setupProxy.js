const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    app.use("/api", createProxyMiddleware({
        target: "https://api.hongbeibang.com",
        changeOrigin: true,
        pathRewrite: {
            "^/api": ""
        }
    }))

    app.use("/user", createProxyMiddleware({
        target: "http://127.0.0.1",
        changeOrigin: true,
        pathRewrite: {
            "^/user": ""
        }
    }))

}
