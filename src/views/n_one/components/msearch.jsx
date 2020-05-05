import React, { Component } from 'react';
import 'element-theme-default';
import style from "./msearch.module.css"
import axios from "axios";
import {
    Link
} from "react-router-dom"
class Msearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: []
        };
    }

    render() {
        return (
            <div>
                <div className={style.d}>
                    <Link to={{ pathname: "/" }}><img className={style.im} src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="" /></Link>
                    <div className={style.se}>
                        <input placeholder="搜索食谱" type="search" />
                    </div>
                    <span>搜索</span>
                </div>
                <p>热门搜索</p>
                {
                    this.state.arr.map(v => (
                        <div key={v.popularSearchId} className={style.dd}>{v.keyword}</div>
                    ))
                }
            </div>
        )
    }
    async componentDidMount() {
        this.listSearch();
    }
    async listSearch() {
        const { data } = await axios.get("/api/keyword/detail?_t=1588658065419&csrfToken=");
        console.log(data.data.popularSearch);
        // 对数据进行了二次过滤。
        // data.data.category.splice(0, 1);
        const arr = data.data.popularSearch;
        this.setState({
            arr
        })
    }
}
export default Msearch;