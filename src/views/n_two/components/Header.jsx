import React, { Component } from 'react';
import style from "../css/header.module.css"
import {
    BrowserRouter as Router,
    NavLink,
    Link,
    Route,

} from "react-router-dom"
import Guanzhu from "./Guanzhu"
import Zuixin from "./Zuixin"
import Daren from "./Daren"

class Header extends Component {
    render() {
        return (
            <div>
                <div className={style.bigDiv}>
                    <div className={style.divTwo}>
                        <div className={style.ziti}>   <img className={style.img} src={'https://image.hongbeibang.com/Fj1u8rBVnt5DLwXqhx8QKlRPLoGI?48X48&imageView2/1/w/48/h/48'} alt="" /></div>
                        <div>
                            <div className={style.zitiOne}>
                                <img className={style.imgOne} src={'https://image.hongbeibang.com/FjmYGE5z6RvQL-_fdLKuSGYfmwO2?48X48&imageView2/1/w/48/h/48'} alt="" />
                            </div>

                            <nav className={style.header}>
                                <NavLink className={style.divOne} exact to={"/hongbeiquan/guanzhu"}>关注</NavLink>

                                <NavLink className={style.divOne} activeClassName={style.bg} to={"/hongbeiquan"}>最新</NavLink>
                                <NavLink className={style.divOne} exact to={"/hongbeiquan/daren"}>达人</NavLink>
                            </nav>



                        </div>
                    </div>


                    <Route exact path={"/hongbeiquan/guanzhu"} component={Guanzhu}></Route>
                    <Route exact path={"/hongbeiquan"}  ></Route>
                    <Route exact path={"/hongbeiquan/daren"} component={Daren}></Route>
                </div>
            </div>
        );
    }
}

export default Header;