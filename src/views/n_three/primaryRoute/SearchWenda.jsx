import React, { Component } from 'react';
import axios from "axios";
import style from "../../../assets/css/three/searchWenda.module.css"
export default class search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastSearch: [],
            searchList: []
        };
        this.input = null
    }
    render() {
        return (
            <div>
                <div className={style.top}>
                    <div className={style.leftDiv} onClick={this.props.history.go.bind(this, -1)}>
                        <i className={"iconfont icon-zuo"}></i>
                    </div>
                    <div className={style.searchDiv}>
                        <input ref={e => this.input = e} type="text" name="" id="" placeholder="搜索食谱/食材,烘焙/家常菜一应俱全" />
                    </div>
                    <div className={style.rightDiv}>
                        <input type="button" value="搜索" />
                    </div>
                </div>
                <p className={style.hotSearch}>热门搜索</p>
                <div className={style.list}>
                    {
                        this.state.searchList.map(v => (
                            <a key={v.sort}>{v.keyword}</a>
                        ))
                    }
                </div>
                <div style={{ display: this.state.lastSearch.length < 1 ? "none" : "block" }}>
                    <p className={style.hotSearch}>最近搜索</p>
                    <div className={style.list}>
                        {
                            this.state.lastSearch.map(v => (
                                <a key={v.lastestSearchId}>{v.keyword}</a>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
    async componentDidMount() {
        const { data } = await axios.get("/api/keyword/detail?_t=" + Date.now())
        console.log(data.data.popularSearch);
        this.setState({
            searchList: data.data.popularSearch,
            lastSearch: [{ keyword: "这是什么", lastestSearchId: 188313143 }]
        })
        // data.data.lastestSearch
    }
}
