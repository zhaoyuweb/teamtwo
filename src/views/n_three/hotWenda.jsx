import React, { Component } from "react";
import style from "../../assets/css/three/newWenda.module.css";
import axios from "axios";
import {
    Link
} from "react-router-dom"
export default class hotWenda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageIndex: 0,
            pageList: []
        };
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
        const { data } = await axios.get("/api/question/getHot", {
            params: {
                _t: Date.now(),
                pageIndex: 0,
                pageSize: 10
            }
        })
        const result = data.data.content.data;
        console.log(data.data.content.data)
        this.setState({
            pageList: [
                ...this.state.pageList,
                ...result
            ]
        })
    }
    componentDidMount() {
        this.listMore();
    }
}