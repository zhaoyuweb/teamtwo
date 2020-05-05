import React, { Component } from 'react';
import 'element-theme-default';
import style from "./top.module.css"
import {
    Link,
    NavLink
} from "react-router-dom"
class Top extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={style.d}>
                <Link to={{ pathname: "/oplus" }}><img className={style.im} src="https://image.hongbeibang.com/Fj1u8rBVnt5DLwXqhx8QKlRPLoGI?48X48&imageView2/1/w/48/h/48" alt="" /></Link>
                <Link to={{ pathname: "/omsearch" }}><div className={style.se}>
                    <img className={style.im1} src="https://image.hongbeibang.com/FltPAS-35CZfvSpnHacXWoqcfFz5?42X42&imageView2/1/w/42/h/42" alt="" />
                    <input placeholder="搜索食谱" type="search" />
                </div></Link>
                <Link to={{ pathname: "/omessage" }}><img className={style.im} src="https://image.hongbeibang.com/FjmYGE5z6RvQL-_fdLKuSGYfmwO2?48X48&imageView2/1/w/48/h/48" alt="" /></Link>

            </div>
        )
    }
}
export default Top;