import React, { Component } from 'react';
import 'element-theme-default';
import style from "./xueinfo.module.css"
import axios from "axios";
import Mlesson from "./Mlesson"
import {
    Link,
    NavLink
} from "react-router-dom"
class Xueinfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: [],
            lesson: []
        };
    }

    render() {
        return (
            <div className={style.dm}>
                <Mlesson slesson={this.state.lesson} />
                {
                    this.state.category.map(v => (
                        <div className={style.dk1} key={v.categoryId}>
                            <div className={style.dh}>
                                <h2>{v.title}</h2>
                                <span><Link style={{ color: "#999999" }} to={{ pathname: "/omore", state: { categoryId: v.categoryId } }}>查看全部</Link></span>
                            </div>
                            <div className={style.dk11}>

                                {
                                    v.item.map(v => (
                                        <Link key={v.categoryItemId} to={{ pathname: "/odetails", state: { courseId: v.educationCourseId } }}>
                                            <div className={style.dk111} key={v.categoryItemId}>
                                                <img src={v.image} alt="" />
                                                <div className={style.dx}>
                                                    <span>{v.buyNum > 1000 ? "1000+" : v.buyNum}</span><span>在学</span>
                                                </div>
                                                <h3>{v.shareTitle}</h3>
                                            </div>
                                        </Link>
                                    ))
                                }

                            </div>

                        </div>
                    ))
                }
            </div>
        )
    }
    async componentDidMount() {
        this.listMore();
        this.listLesson();
    }
    async listMore() {
        const { data } = await axios.get("/api/education/getIndexByWeb?_t=1587693290675&csrfToken=");
        console.log(data.data.category);
        // 对数据进行了二次过滤。
        data.data.category.splice(0, 1);
        const category = data.data.category;
        console.log(data.data.category)
        this.setState({
            category
        })
    }
    async listLesson() {
        const { data } = await axios.get("/api/recommend/getRandContent?_t=1588572269298&csrfToken=&type=3&pageSize=10");
        console.log(123, data.data.data);
        const lesson = data.data.data;

        this.setState({
            lesson
        })
    }
}
export default Xueinfo;