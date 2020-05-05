import React, { Component } from "react";
import axios from "axios";
import style from "../../assets/css/three/newWenda.module.css";
import {
    Link,
    NavLink
} from "react-router-dom"
class newWenda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageIndex: -1,
            pageSize: 10,
            pageList: []
        };
        this.scrollListener = this.scrollFun.bind(this);
    }
    render() {
        return (
            <div className={style.wendaboss} >
                <div className={style.contentTop}></div>
                {
                    this.state.pageList.map((v, Num) => (
                        <div key={Num} className={style.boss}>
                            <Link className={style.a} to={{ pathname: "/wendainfo/", state: { contentId: v.contentId, clientId: v.clientId } }}>{v.coverTitle}</Link>
                            <Link className={style.content} to={{ pathname: "/FoodInfo", state: { recipeContentId: v.recipeContentId, clientId: v.recipe.clientId, noContentId: v.recipe.contentId } }}>
                                <div style={{ marginRight: "15px" }}>
                                    <img src={v.recipe.image} style={{ width: "70px", height: "70px", borderRadius: "8px" }} alt="" />
                                </div>
                                <div>
                                    <div>{v.recipe.title}</div>
                                    <p style={{ color: '#999999' }}>作者：{v.recipe.clientName}</p>
                                </div>
                            </Link>
                            <div className={style.floor}>
                                <div className={"iconfont icon-bianxie"}></div>
                                <div style={{ marginLeft: "5px" }}>写答案</div>
                            </div>
                            {v.answerNum < 1 ? <div className={style.noanswer}>暂无问答</div> : <div style={{ color: "#999999" }}>{v.answerNum}个问答</div>}

                        </div>
                    ))
                }
                <input type="button" onClick={this.listMore.bind(this)} style={{ width: "100%", outline: "none", border: 0 }} />
            </div>
        )
    }
    async listMore() {
        const pageIndex = this.state.pageIndex + 1;
        console.log("pageIndex:", pageIndex)
        console.log(11111, pageIndex)
        const { data } = await axios.get("/api/question/getNew", {
            params: {
                _t: Date.now(),
                pageIndex,
                pageSize: this.state.pageSize
            }
        });
        const list = data.data.content.data;
        console.log(1111, list);
        console.log(2222, this.state.wendaList)
        this.setState({
            pageIndex,
            pageList: [
                ...this.state.pageList,
                ...list
            ]
        });
        console.log(333333, this.state.wendaList)
    }
    scrollFun() {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        if ((scrollHeight - scrollTop) === (clientHeight)) {
            this.listMore();
        }
    }
    componentDidMount() {
        this.listMore();

        // window.addEventListener('scroll', this.scrollListener);
    }
    componentWillUnmount() {
        // window.removeEventListener('scroll', this.scrollListener);
    }
}
export default newWenda;