import React, { Component } from 'react';
import 'element-theme-default';
import style from "./Mlesson.module.css"
import {
    Link,
    NavLink
} from "react-router-dom"
class Mlesson extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={style.d}>
                <h2>推荐课程</h2>
                <div className={style.dm}>

                    {
                        this.props.slesson.map(
                            v => (
                                <Link key={v.contentId} to={{ pathname: "/odetails", state: { courseId: v.courseId } }}>
                                    <div className={style.dk111} key={v.contentId}>
                                        <img src={v.coverImage} alt="" />
                                        <div className={style.dx}>
                                            <span>{v.buyNum > 1000 ? "1000+" : v.buyNum}</span><span>在学</span>
                                        </div>
                                        <h3>{v.coverTitle}</h3>
                                    </div>
                                </Link>

                            )
                        )
                    }
                </div>
            </div>
        )
    }
}
export default Mlesson;