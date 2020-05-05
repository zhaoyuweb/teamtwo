import React, { Component } from 'react';
import axios from "axios"
import {
    NavLink,
    Route,
    Link
} from "react-router-dom";
import newWenda from "./newWenda";
import essence from "./essence";
import hotWenda from "./hotWenda";
import style from "../../assets/css/three/newWenda.module.css";
export default class wenda extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div style={{ width: "100%" }}>
                <div className={style.topBoss}>
                    <div className={style.top}>
                        <div className={style.searchLeft}>
                            <span>提问</span>
                        </div>
                        <div className={style.searchDiv} >
                            <Link style={{ textDecoration: "none", color: "#4A4945" }} to={"/searchwenda"}>
                                <p>搜索问题</p>
                            </Link>
                        </div>
                        <div className={style.searchRight}>
                            <span className={"iconfont icon-lingdang"} style={{ fontSize: "20px" }}></span>
                        </div>
                    </div>
                    <nav className={style.nav}>
                        <NavLink to={"/wenda/essence"} activeClassName={style.active}><span>精华问答</span>
                        </NavLink>
                        <NavLink exact to={"/wenda"} activeClassName={style.active}><span>最新问题</span>
                        </NavLink>
                        <NavLink to={"/wenda/hot"} activeClassName={style.active}><span>最热问题</span>
                        </NavLink>
                    </nav>
                </div>
                <Route path={"/wenda/essence"} component={essence}></Route>
                <Route exact path={"/wenda"} component={newWenda}></Route>
                <Route path={"/wenda/hot"} component={hotWenda}></Route>
                <div className={style.wdfloor}></div>
            </div >)
    }
    // toSearchWenda() {
    //     // console.log(this);
    //     this.props.history.push("/searchwenda")
    // }
}