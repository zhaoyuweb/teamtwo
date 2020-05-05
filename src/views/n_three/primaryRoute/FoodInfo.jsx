import React, { Component } from 'react';
import axios from "axios";
import header from "../../../assets/css/three/wendaInfo.module.css";
import contentbody from "../../../assets/css/three/foodInfo.module.css";
export default class FoodInfo extends Component {
    constructor(props) {
        super(props);
        this.inp = null;
        this.state = {
            pageIndex: 0,
            pageSize: 10,
            step: [],
            materials: [],
            quantity: 1,
            stepList: [],
            recipeRecommended: [],
            lesson: [],
            recommendedlession: [],
            commentNum: 0,
            comment: [
                {
                    "beautyNum": 0,
                    "clientId": 3501905,
                    "clientImage": "http://image.hongbeibang.com/FgsyeZqtqp9iVX4TdpnmXJqXW-56?100X100",
                    "clientName": "死性不改",
                    "clientSign": "",
                    "collectNum": 0,
                    "commentClientId": 3357577,
                    "commentClientImage": "http://image.hongbeibang.com/FsexUgrGlfMbiblrTgI3Ez2XsPff?132X132",
                    "commentClientName": "维茹",
                    "commentContentId": 15479541,
                    "comments": {
                        "count": 0,
                        "data": []
                    },
                    "contentCommentId": 10268924,
                    "contentId": 15504348,
                    "coverImage": "http://image.hongbeibang.com/Fv5WjBcfnO4fYIbMqm79cWgMVfxy?474X474",
                    "coverSummary": "厉害",
                    "coverTitle": "手撕土司，奶香味十足，一次发酵快手法",
                    "createTime": "2020-04-28 23:22:40",
                    "easyNum": 0,
                    "floorCommentContentId": 15479541,
                    "hateNum": 0,
                    "hotNum": 0,
                    "image": "",
                    "isMaster": 0,
                    "likeNum": 0,
                    "modifyTime": "2020-04-28 23:22:40",
                    "prefixTitle": "",
                    "rewardNum": 0,
                    "rootCommentContentId": 15479541,
                    "shareDescription": "",
                    "shareImage": "",
                    "shareNum": 0,
                    "shareTitle": "",
                    "state": 2,
                    "text": "厉害",
                    "thankNum": 0,
                    "totalScore": 0,
                    "type": 8,
                    "visitNum": 0
                },
                {
                    "beautyNum": 0,
                    "clientId": 3492168,
                    "clientImage": "http://image.hongbeibang.com/FvQ4LfE48gkAKkCexRuCqzNogEVg?132X132",
                    "clientName": "柯内特朱斌",
                    "clientSign": "",
                    "collectNum": 0,
                    "commentClientId": 3357577,
                    "commentClientImage": "http://image.hongbeibang.com/FsexUgrGlfMbiblrTgI3Ez2XsPff?132X132",
                    "commentClientName": "维茹",
                    "commentContentId": 15479541,
                    "comments": {
                        "count": 0,
                        "data": []
                    },
                    "contentCommentId": 10265284,
                    "contentId": 15479965,
                    "coverImage": "http://image.hongbeibang.com/Fv5WjBcfnO4fYIbMqm79cWgMVfxy?474X474",
                    "coverSummary": "厉害了！",
                    "coverTitle": "手撕土司，奶香味十足，一次发酵快手法",
                    "createTime": "2020-04-21 23:03:09",
                    "easyNum": 0,
                    "floorCommentContentId": 15479541,
                    "hateNum": 0,
                    "hotNum": 0,
                    "image": "",
                    "isMaster": 0,
                    "likeNum": 0,
                    "modifyTime": "2020-04-21 23:03:09",
                    "prefixTitle": "",
                    "rewardNum": 0,
                    "rootCommentContentId": 15479541,
                    "shareDescription": "",
                    "shareImage": "",
                    "shareNum": 0,
                    "shareTitle": "",
                    "state": 2,
                    "text": "厉害了！",
                    "thankNum": 0,
                    "totalScore": 0,
                    "type": 8,
                    "visitNum": 0
                }
            ]
        };
    }
    render() {
        return (
            <div style={{ background: "#F5F7F9" }}>
                <div className={header.top}>
                    <div className={header.topLeft} onClick={this.props.history.go.bind(this, -1)}>
                        <i className={"iconfont icon-zuo"}></i>
                    </div>
                    <div className={header.topRight} style={{ background: "#FFFFFF", borderRadius: "30px", color: "#E98B71", border: "1px solid #E98B71" }}>
                        收藏
                    </div>
                </div>
                <div style={{ width: "100%", height: "44px" }}></div>
                {
                    this.state.step.map((v, index) => (
                        <div key={index} style={{ background: "#FFFFFF" }}>
                            <img style={{ width: "100%", display: "block" }} src={v.coverImage} alt="" />
                            <div className={contentbody.content}>
                                <div style={{ fontSize: "25px", fontWeight: "bold", lineHeight: "35px", margin: "15px 0" }}>{v.coverTitle}</div>
                                <div className={contentbody.userInfo}>
                                    <div className={contentbody.userTop} style={{ width: "100%", height: "40px" }}>
                                        <div>
                                            <img src={v.clientImage + "&imageView2/1/w/640/h/640"} />
                                        </div>
                                        <p>{v.clientName}</p>
                                        <div>+关注</div>
                                    </div>
                                    <div className={contentbody.userBottom}>{v.coverSummary}</div>
                                </div>
                                <div>
                                    <div style={{ color: "#313131", fontSize: "16px", padding: "15px 0 0" }}>食材用料</div>
                                    <div style={{ width: "100%", margin: "15px 0", height: "35px" }}>
                                        <div className={"iconfont icon-jian"} style={{ float: "left", width: "25px", height: "25px", padding: "5px", background: "#F5F7F9", fontSize: "25px", fontWeight: "bold", lineHeight: "25px", textAlign: "center" }}></div>
                                        <div style={{ float: "left", width: "50px", height: "35px", background: "#F5F7F9", margin: "0 3px" }}>
                                            <input style={{ width: "35px", height: "24px", border: "none", outline: "none", margin: "0 5px", padding: "0 7.5px", background: "#F5F7F9", borderBottom: "thin solid #4A4640", textAlign: "center", margin: "5px 0", fontSize: "17px", fontWeight: "bold" }} type="text" name="" id="" value={this.state.quantity} ref={e => this.inp = e} />
                                        </div>
                                        <div className={"iconfont icon-jia"} style={{ float: "left", width: "25px", height: "25px", padding: "5px", background: "#F5F7F9", fontSize: "20px", fontWeight: "bold", lineHeight: "25px", textAlign: "center" }}></div>
                                        <div style={{ float: "left", fontSize: "13px", color: "#999999", lineHeight: "35px" }}>（份量/{v.unit}）</div>
                                    </div>
                                    <div className={contentbody.materialList}>
                                        {
                                            this.state.materials.map(m => (
                                                <div className={contentbody.materialLi} key={m.contentRecipeMaterialId}>
                                                    <div>{m.name}</div>
                                                    <div>{parseInt(m.weight) * this.state.quantity}克</div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className={contentbody.stepList}>
                                        {
                                            this.state.stepList.map((n, x) => (
                                                <div style={{ width: "100%", padding: "15px 0" }} key={n.contentRecipeStepId}>
                                                    <div>步骤{x + 1}</div>
                                                    <img style={{ display: "block", width: "100%", marginTop: "15px", borderRadius: "4px" }} src={n.image} alt="" />
                                                    <p>{n.text}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className={contentbody.upWorks}>
                                    <i className={"iconfont icon-xiangji"}>上传我的作品</i>
                                </div>
                            </div>

                        </div>
                    ))
                }
                <div className={contentbody.recipeTitle}>
                    <div>食谱推荐</div>
                    <div>查看全部</div>
                </div>
                <div className={contentbody.recipeRecommended}>
                    {
                        this.state.recipeRecommended.map(v => (
                            <div key={v.contentRecipeId} className={contentbody.recipeRecommended_child}>
                                <img src={v.coverImage + "&imageView2/1/w/640/h/372"} alt="" />
                                <div>{v.coverTitle}</div>
                            </div>
                        ))
                    }
                </div>
                <div className={contentbody.recipeTitle}>
                    <div>作者食谱</div>
                    <div>查看全部</div>
                </div>
                <div className={contentbody.recipeRecommended}>
                    {
                        this.state.lesson.map(v => (
                            <div key={v.contentRecipeId} className={contentbody.recipeRecommended_child}>
                                <img src={v.coverImage + "&imageView2/1/w/640/h/372"} alt="" />
                                <div>{v.coverTitle}</div>
                            </div>
                        ))
                    }
                </div>
                <div className={contentbody.recipeTitle}>
                    <div>课程推荐</div>
                    <div>查看全部</div>
                </div>
                <div className={contentbody.recipeRecommended}>
                    {
                        this.state.recommendedlession.map(v => (
                            <div key={v.contentRecipeId} className={contentbody.recipeRecommended_child2}>
                                <div style={{ width: "100%", height: "225px", position: "relative" }}>
                                    <img style={{ borderRadius: "4px", display: "block", width: "100%", height: "225px" }} src={v.coverImage + "&imageView2/1/w/640/h/372"} alt="" />
                                    <span style={{ position: "absolute", bottom: "10px", left: 0, width: "64px", height: "20px", padding: "2px 4px", fontSize: "11px", color: "#4A4945", background: "#FFFFFF", borderRadius: "4px", margin: "0 10px", textAlign: "center", lineHeight: "20px" }}>{v.buyNum > 1000 ? "1000+" : v.buyNum}在学</span>
                                </div>
                                <div>{v.coverTitle}</div>
                            </div>
                        ))
                    }
                </div>
                <div className={contentbody.commentsTop}>
                    <p>帮友评论</p>
                    <div>
                        <div className={"iconfont icon-zan"}>
                            <span>
                                {this.state.step.length < 1 ? "" : this.state.step[0].likeNum}
                            </span>
                        </div>
                        <div className={"iconfont icon-yuanbao"}>
                            <span>
                                {this.state.step.length < 1 ? "" : this.state.step[0].rewardNum}
                            </span>
                        </div>
                        <div className={"iconfont icon-liuyan"}>
                            <span>
                                {this.state.commentNum < 1 ? "" : this.state.commentNum}
                            </span>
                        </div>
                    </div>
                </div>
                <div className={contentbody.commentsbox}>
                    {
                        this.state.comment.map((v, index) => (
                            <div key={index} className={contentbody.comments}>
                                <img src={v.clientImage + "&imageView2/1/w/100/h/100"} alt="" />
                                <div>
                                    <p>{v.clientName}</p>
                                    <p>{v.modifyTime}</p>
                                    <p>{v.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
    async componentDidMount() {
        console.log(this.props.location.state.recipeContentId)
        console.log(this.props.location.state.clientId)
        console.log(this.props.location.state.noContentId)
        const stepdata = await axios.get("/api/recipe/get", {
            params: {
                _t: Date.now(),
                contentId: this.props.location.state.recipeContentId,
                quantity: ""
            }
        })
        const lessondata = await axios.get("/api/recipe/getClientByNoContenId", {
            params: {
                _t: Date.now(),
                noContentId: this.props.location.state.noContentId,
                clientId: this.props.location.state.clientId,
                pageIndex: this.state.pageIndex,
                pageSize: this.state.pageSize
            }
        })
        const recommendedlessiondata = await axios.get("/api/recommend/getRandContent?type=3&pageSize=10", {
            params: {
                _t: Date.now()
            }
        })
        const floorComment = await axios.get("/api/comment/getFloor", {
            params: {
                _t: Date.now(),
                pageIndex: this.state.pageIndex,
                pageSize: this.pageSize,
                contentId: this.props.location.state.recipeContentId,
                csrfToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjM1MDE5MDUsImV4cCI6MTc3Nzc4MTU5NywiaWF0IjoxNTg4NDc5MTk3fQ.9m7ErqCGF5G-_cmCRqZzwyWESQjBljPGF_IckLdOsUE"
            }
        })
        console.log("floor:", floorComment.data)
        this.setState({
            step: [stepdata.data.data.recipe],
            materials: stepdata.data.data.recipe.material,
            quantity: stepdata.data.data.recipe.quantity,
            stepList: stepdata.data.data.recipe.step,
            recipeRecommended: stepdata.data.data.recipe.recipe,
            lesson: lessondata.data.data,
            recommendedlession: recommendedlessiondata.data.data.data,
            commentNum: floorComment.data.data.count
        })
        console.log("lesson:", this.state.step)
        console.log(stepdata.data.data.recipe)
        // console.log(this.state.materials)
        // console.log(this.state.stepList)
        console.log(this.state.recipeRecommended)
    }
}
