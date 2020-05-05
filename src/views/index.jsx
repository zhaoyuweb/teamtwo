import React, { Component } from "react";
import { NavLink, Route, Redirect } from "react-router-dom";
import xuehongbei from "./xuehongbei"
import hongbeiquan from "./n_two/hongbeiquan"
import wenda from "./n_three/wenda"
import Xiaowo from "./n_four/xiaowo"
import style from "./index.module.css"

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div style={{ position: "relative" }}>
                <nav className={style.n1}>
                    <div>
                        <NavLink exact className={"App-link"} activeClassName={"App-active"} to={"/"}>
                            <img src="https://image.hongbeibang.com/FhngZoiK_s7Zw4K3DxLogRfqoO06?50X50&imageView2/1/w/50/h/50" alt="" />
                            学烘焙
                        </NavLink>
                    </div>
                    <div>
                        <NavLink className={"App-link"} activeClassName={"App-active"} to={"/hongbeiquan"}>
                            <img src="https://image.hongbeibang.com/Fkpdn7F9EWxvNeSS8M7V4_xbRPlf?50X50&imageView2/1/w/50/h/50" alt="" />
                            烘焙圈
                            </NavLink>
                    </div>
                    <div>
                        <NavLink className={"App-link"} activeClassName={"App-active"} to={"/wenda"}>
                            <img src="https://image.hongbeibang.com/Flm_lYHJQA56h0VyhdRhQ1i5iO06?50X50&imageView2/1/w/50/h/50" alt="" />
                            问答
                            </NavLink>
                    </div>
                    <div>
                        <NavLink className={"App-link"} activeClassName={"App-active"} to={"/xiaowo"}>
                            <img src="https://image.hongbeibang.com/FrYeKj0MohOJQuNzUgCugg90cHCS?50X50&imageView2/1/w/50/h/50" alt="" />
                            小窝
                            </NavLink>
                    </div>

                </nav>
                <Route component={xuehongbei} exact path={"/"}></Route>
                <Route component={hongbeiquan} path={"/hongbeiquan"}></Route>
                <Route component={wenda} path={"/wenda"}></Route>
                <Route path={"/xiaowo"} render={() => isLogin() ? <Xiaowo /> : <Redirect to="/login"></Redirect>}></Route>
            </div>
        )
    }

}
function isLogin() {
    const userNameList = ["zhaoyu", "yuyongsheng", "yijingzhou", "haoyanhua"]
    let i = userNameList.indexOf(localStorage.userName)
    console.log(i)
    if (!localStorage.userName) {
        return false
    } else if (i < 0) {
        return false
    }
    return true


}
