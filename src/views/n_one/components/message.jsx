import React, { Component } from 'react';
import 'element-theme-default';
import style from "./message.module.css"
import {
    Link
} from "react-router-dom"
class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className={style.dtop}>
                    <Link to={{ pathname: "/" }}><img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="" /></Link>
                    <span>消息</span>

                </div>
                <p>暂无消息</p>
            </div>
        )
    }
}
export default Message;