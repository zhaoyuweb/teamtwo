import React, { Component } from 'react';
import 'element-theme-default';
import style from "./more.module.css"
import axios from "axios";
import {
    Link
} from "react-router-dom"
class More extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: []
        };
    }

    render() {
        return (
            <div>
                <Link to={{ pathname: "/" }}>
                    <div style={{ width: 50, height: 50 }}>返回主页</div>
                </Link>
                {
                    this.state.arr.map(v => (
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
        )
    }
    async componentDidMount() {
        this.listQ();
    }
    async listQ() {
        const { data } = await axios.get(`/api/index/getIndexItem?_t=1588643641504&csrfToken=&pageIndex=0&pageSize=10&categoryId=${this.props.location.state.categoryId}`);
        console.log(data.data);
        // 对数据进行了二次过滤。
        // data.data.category.splice(0, 1);
        const arr = data.data;
        this.setState({
            arr
        })
    }
}
export default More;