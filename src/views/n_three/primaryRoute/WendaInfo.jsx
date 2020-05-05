import React, { Component } from 'react';
import axios from "axios";
import style from "../../../assets/css/three/newWenda.module.css";
import style2 from "../../../assets/css/three/wendaInfo.module.css";
import {
    Link
} from "react-router-dom"
export default class wendaInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageIndex: 0,
            pageSize: 10,
            question: [],
            answer: [],
        };
    }
    render() {
        return (
            <div style={{ width: "100%", height: "100vh", background: "#F5F7F9", position: "relative" }}>
                <div className={style2.top}>
                    <div className={style2.topLeft} onClick={this.props.history.go.bind(this, -1)}>
                        <i className={"iconfont icon-zuo"}></i>
                    </div>
                    <div className={style2.topRight}>
                        收藏
                    </div>
                </div>
                <div style={{ width: "100%", height: "44px" }}></div>
                <div className={style2.boss} style={{ background: "#ffffff" }}>
                    {
                        this.state.question.map((v, Num) => (
                            <div key={Num} className={style.boss}>
                                <a className={style.a}>{v.coverTitle}</a>
                                <div className={style.content}>
                                    <div>
                                        <img src={v.recipe.image} style={{ width: "70px", height: "70px" }} alt="" />
                                    </div>
                                    <div>
                                        <div>{v.recipe.title}</div>
                                        <p style={{ color: '#999999' }}>作者：{v.recipe.clientName}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className={style2.boss} style={{ display: this.state.question.map(v => { return v.answerNum }).length < 1 ? "none" : "block" }}>
                    <p style={{ padding: "10px", color: "#999999", fontSize: "16px", height: "20px", background: "#F5F7F9" }}>{this.state.question.map((Num, v) => (<span key={v}>{Num.answerNum}</span>))}个回答</p>
                </div>
                <div>
                    {
                        this.state.answer.map((v, index) => (
                            <div key={index} className={style2.answerbox} style={{ background: "#ffffff" }}>
                                <div className={style2.firstline}>
                                    <img className={style2.firstline_l} src={v.clientImage + "2016X1508&imageView2/1/w/80/h/80"} alt="" />
                                    <div className={style2.firstline_r}>
                                        <div className={style2.info}>
                                            <img className={style.masterImg} style={{ display: (v.isMaster === 1 ? "block" : "none") }} src={"https://image.hongbeibang.com/Fj1UT_HuSX4MkdcukYhWRpioEyWx?200X200&imageView2/1/w/80/h/80"} alt="" />
                                            <div className={style.userId} style={{ marginLeft: v.isMaster ? "45px" : "5px" }}>
                                                {v.clientName}
                                            </div>
                                        </div>
                                        <div style={{ lineHeight: "20px", fontSize: "12px", color: "#999999" }}>
                                            {v.createTime}
                                        </div>
                                    </div>
                                </div>
                                {/* <Link>{v.description}</Link> */}
                                <a>{v.description}</a>
                                <div className={style2.commentfloor}>
                                    <div><i style={{ fontSize: "20px" }} className={"iconfont icon-zan"}></i><span style={{ fontSize: "12px", marginLeft: "10px" }}>{v.likeNum < 1 ? "点赞" : v.likeNum}</span></div>
                                    <div><i style={{ fontSize: "20px" }} className={"iconfont icon-liuyan"}></i><span style={{ fontSize: "12px", marginLeft: "10px" }}> 评论</span></div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div style={{ width: "100%", height: "50px" }}></div>
                <div className={style2.bottom}>
                    <div>
                        <i className={"iconfont icon-liuyan"}>邀请</i>
                    </div>
                    <p></p>
                    <div>
                        <i className={"iconfont icon-bianxie"}>我来回答</i>
                    </div>
                </div>
            </div>
        )
    }
    async componentDidMount() {
        console.log(this.props.location.state)
        const question = await axios.get("/api/question/getQuestion", {
            params: {
                _t: Date.now(),
                contentId: this.props.location.state.contentId
            }
        })
        console.log(question)
        this.setState({
            question: [
                question.data.data.content
            ]
        })
        const answer = await axios.get("/api/question/getAnswers?", {
            params: {
                _t: Date.now(),
                pageSize: this.state.pageSize,
                pageIndex: this.state.pageIndex,
                contentId: this.props.location.state.contentId,
                clientId: this.props.location.state.clientId
            }
        })
        console.log(11111, answer.data.data.content.answer.data);
        this.setState({
            question: [
                question.data.data.content
            ],
            answer: answer.data.data.content.answer.data
        })
        console.log(this.state.answer)
        // console.log(1111, this.state.question.map(v => { return v.answerNum }));
    }
}
