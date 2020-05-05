import React, { Component } from 'react';
import 'element-theme-default';
import style from "./middle.module.css"
import {
    Link,
    NavLink
} from "react-router-dom"
class Middle extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={style.dm}>
                <Link to={{ pathname: '/omiddlebox' }}>
                    <div>
                        <img src="https://image.hongbeibang.com/FqTIqQgUiGzbGvFBjYJyJRIvmb7W?80X80&imageView2/1/w/80/h/80" alt="" />
                        <p>技巧百科</p>
                    </div>
                </Link>
                <Link to={{ pathname: '/omiddlebox' }}>
                    <div>
                        <img src="https://image.hongbeibang.com/FsdwLQX6d3HCUvTO6krgAvL12e5z?80X80&imageView2/1/w/80/h/80" alt="" />
                        <p>视频学堂</p>
                    </div>
                </Link>
                <Link to={{ pathname: '/omiddlebox' }}>
                    <div>
                        <img src="https://image.hongbeibang.com/Ftas3mziKsE3fMQvZ3jC4YgDugVk?80X80&imageView2/1/w/80/h/80" alt="" />
                        <p>新手教程</p>
                    </div></Link>
                <Link to={{ pathname: '/omiddlebox' }}>
                    <div>
                        <img src="https://image.hongbeibang.com/FqkRcAKpMnFUL3qs1BB9aOhbihlj?80X80&imageView2/1/w/80/h/80" alt="" />
                        <p>食谱分类</p>
                    </div></Link>
            </div>
        )
    }
}
export default Middle;