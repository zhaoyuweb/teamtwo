import React, { Component } from 'react';
import axios from "axios"
import Header from "./Header.jsx"
import style from "../css/header.module.css"
import Guanggao from "./Guanggao.jsx"
import Btn from "./Btn.jsx"

export default class Zuixin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageIndex: 0,
            pageSize: 10,
            result: []
        }

    }

    render() {
        return (<div>
            {/* <Header></Header> */}
            <Guanggao></Guanggao>
            <Btn></Btn>

            {

                this.state.result.map((v, index) => (
                    <div className={style.xrdivOne} key={v.clientId + index}>
                        <div className={style.xrdivOneH1}>
                            <img className={style.xrdivOneH1img} src={v.clientImage} alt="" />
                            <div className={style.divbaba}>
                                <div className={style.spandiv1}> <span className={style.span1}>{v.clientName}</span></div>
                                <div className={style.spandiv1}> <span className={style.span1}>{v.title}</span></div>
                            </div>

                        </div>
                        <span className={style.span3}>{v.introduce}</span>
                        <div className={style.imgin}>
                            {v.image.map((v, index) => (<a href='#' key={v + index}><img className={style.aImg} src={v} alt="" /></a>))}


                        </div>
                        <div className={style.footer}>
                            <div className={style.footera}>
                                <img className={style.footerimg} src={'https://image.hongbeibang.com/Fqv9VBHXG627znbKlZYnHQMTHVdc?200X200&imageView2/1/w/38/h/38'} alt="" />
                                <div className={style.shuzi}>点赞</div>
                            </div>
                            <div className={style.footera}>
                                <img className={style.footerimg} src={'https://image.hongbeibang.com/Fi6E0gsACPeVV5_xgH5JBn6PN45m?200X200&imageView2/1/w/38/h/38'} alt="" />
                                <div className={style.shuzi}>打赏</div>
                            </div>
                            <div className={style.footera}>
                                <img className={style.footerimg} src={'https://image.hongbeibang.com/FiZ5-B7_rmV_gnPl97P-FkpjSlij?200X200&imageView2/1/w/38/h/38'} alt="" />
                                <div className={style.shuzi}>评论</div>
                            </div>
                        </div>
                    </div>
                ))


            }
        </div >)
    }
    async listMore() {
        const pageIndex = this.state.pageIndex + 1;
        // const a = await axios.get("/api/v2/feed/getNew", {
        //     params: {
        //         _t: Date.now(),
        //         // csrfToken: "",
        //         pageIndex,
        //         pageSize: this.state.pageSize
        //     }
        // })
        // console.log(56466, a);
        const { data } = await axios.get("/api/v2/feed/getNew", {
            params: {
                _t: Date.now(),
                // csrfToken: "",
                pageIndex,
                pageSize: this.state.pageSize
            }
        })
        // console.log(6666, this.state.pageIndex)

        // console.log(data);
        // console.log(data.data.content);
        // console.log(666, this.state.pageIndex)
        this.setState({
            pageIndex,
            // pageSize: this.state.pageSize,
            result: [...this.state.result, ...data.data.content]
        })
    }

    // _t=1588334292480&csrfToken=&pageIndex=2&pageSize=10
    componentDidMount() {
        this.listMore();

        window.addEventListener('scroll', () => {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
            let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            if ((scrollHeight - scrollTop) < (clientHeight + 100)) {
                // console.log((scrollHeight - scrollTop) - (clientHeight))

                this.listMore();

                // console.log(1000, this.state.pageIndex)


            }
        }
        )
    }
}

