import React, { Component } from "react";
import axios from "axios";
import topstyle from "../../assets/css/three/newWenda.module.css";
import style from "../../assets/css/three/essence.module.css";
export default class essence extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageIndex: 0,
            pageSize: 10,
            pageList: []
        };
    }
    render() {
        return (
            <div className={style.essenceboss}>
                <div className={topstyle.contentTop}></div>
                {
                    this.state.pageList.map(v => (
                        <div key={v.contentId} className={style.contentbox}>
                            <div>
                                <div className={style.firstLine}>
                                    <div className={style.userImgDiv}>
                                        <img className={style.userImg} src={v.clientImage + "&imageView2/1/w/80/h/80"} />
                                    </div>
                                    <div className={style.masterDiv} style={{ display: (v.isMaster === 1 ? "block" : "none") }}>
                                        <img className={style.masterImg} src={"https://image.hongbeibang.com/Fj1UT_HuSX4MkdcukYhWRpioEyWx?200X200&imageView2/1/w/80/h/80"} alt="" />
                                    </div>
                                    <div className={style.userId}>
                                        {v.clientName}
                                    </div>
                                </div>
                                <div className={style.secondLine}>
                                    {v.coverTitle}
                                </div>
                                <div className={style.thirdLine}>
                                    {v.coverSummary}
                                </div>
                                <div className={style.lastLine}>
                                    {v.hotNum}个赞
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
    async listMore() {
        const { data } = await axios.get("/api/question/getEssence", {
            params: {
                _t: Date.now(),
                pageIndex: 0,
                pageSize: 10
            }
        });
        const list = data.data.content.data;
        console.log(list)
        this.setState({
            pageList: [
                ...this.state.pageList,
                ...list
            ]
        })
    }
    componentDidMount() {
        this.listMore();
    }
}