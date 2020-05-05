import React, { Component } from 'react';
import style from "../../assets/css/xiaowo.module.css"
import axios from "axios";
import {
    Link
} from "react-router-dom"


export default class xiaowo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }

    }
    render() {
        const { userName, createTime } = this.state.user
        return (<div>
            <div>
                {/* ************头部******* */}
                <div style={{ width: '100%', height: '44px' }}>
                    <Link to={"/set"}>
                        <img className={style.imgh} src={'https://image.hongbeibang.com/FthUBRvh6uWFq7omAeGtn8A-0E4s?48X48&imageView2/1/w/48/h/48'} />
                    </Link>
                </div>

                <div style={{ width: '100%', height: '79px' }}>
                    <img className={style.imgz} src={'https://image.hongbeibang.com/FnOs-rk9erEuSVo0abmlGs7CD_Qz?460X460&imageView2/1/w/160/h/160'} />
                    <div className={style.user}>
                        <div style={{ width: '275px', height: '28px' }}>
                            <p className={style.username}>{userName}</p>
                            <img className={style.imgz1} src={'https://image.hongbeibang.com/FmFlZjZn6BHHnqrYVMz6MGecwc0J?200X200&imageView2/1/w/50/h/50'} />
                        </div>
                        <div style={{ width: '275px', height: '23px', marginTop: '4px', marginBottom: '4px' }}>
                            <p className={style.userid}>ID:{createTime}</p>
                            <Link to={"/personalSet"}>
                                <img className={style.imgz2} src={'https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46'} />
                            </Link>
                        </div>
                        <div className={style.jingyan}>
                            <p style={{ fontSize: '10px', color: '#999999' }}>经验值:0/100</p>
                        </div>
                    </div>
                </div>

                <div className={style.xingwei}>

                    <li>
                        <p style={{textAlign:"center"}}>0</p>
                        <p style={{textAlign:"center"}}>关注</p>
                    </li>

                    <li>
                        <p style={{textAlign:"center"}}>0</p>
                        <p style={{textAlign:"center"}}>粉丝</p>
                    </li>
                    <li>
                        <p style={{textAlign:"center"}}>0</p>
                        <p style={{textAlign:"center"}}>帮贡</p>
                    </li>
                </div>

                <div className={style.navs}>
                    <Link to={"/release"}>
                        <div>
                            <img className={style.imgs} src={'https://image.hongbeibang.com/FgyV7GBC4RPoagtZnK-npLaoB1N6?160X160&imageView2/1/w/80/h/80'} />
                            <p style={{textAlign:"center"}}>作品</p>
                        </div>
                    </Link>
                    <Link to={"/release"}>
                        <div>
                            <img className={style.imgs} src={'https://image.hongbeibang.com/FhxeeHCgOPEcoLPR3sP6XNbybdvK?160X160&imageView2/1/w/80/h/80'} />
                            <p style={{textAlign:"center"}}>食谱</p>
                        </div>
                    </Link>
                    <Link to={"/collect"}>
                        <div>
                            <img className={style.imgs} src={'https://image.hongbeibang.com/FkmRCthKDaI5Afc_NdkTZaqNLPE1?160X160&imageView2/1/w/80/h/80'} />
                            <p style={{textAlign:"center"}}>收藏</p>
                        </div>
                    </Link>
                    <Link to={"/release"}>
                        <div>
                            <img className={style.imgs} src={'https://image.hongbeibang.com/FgKxvkwdg8OOr9mhPok2JBVnCG2n?160X160&imageView2/1/w/80/h/80'} />
                            <p style={{textAlign:"center"}}>问题</p>
                        </div>
                    </Link>
                </div>

                <div style={{ marginLeft: '15px' }}>
                    <Link to={"/medal"}>
                        <div className={style.gongnengs}>
                            <div className={style.gongneng}>
                                <img className={style.image} src={'https://image.hongbeibang.com/FpFAELJdsHHxStgBnhPdgYgGmAYo?48X48&imageView2/1/w/48/h/48'} />
                                <span>勋章库</span>
                                <img className={style.imgh1} src={'https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46'} />
                            </div>
                        </div>
                    </Link>
                    <Link to={"/special"}>
                        <div className={style.gongnengs}>
                            <div className={style.gongneng}>
                                <img className={style.image} src={'https://image.hongbeibang.com/FjqJkpwIsLMWXY0LsNTSRG853oJR?48X48&imageView2/1/w/48/h/48'} />
                                <span>精彩活动</span>
                                <img className={style.imgh1} src={'https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46'} />
                            </div>
                        </div>
                    </Link>
                    <Link to={"/sign"}>
                        <div className={style.gongnengs}>
                            <div className={style.gongneng}>
                                <img className={style.image} src={'https://image.hongbeibang.com/Fu1OwEAsExJ20OHVI2ZqBEtLtubY?48X48&imageView2/1/w/48/h/48'} />
                                <span>每日签到</span>
                                <img className={style.imgh1} src={'https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46'} />
                            </div>
                        </div>
                    </Link>
                    <Link to={"/courses"}>
                        <div className={style.gongnengs1}>
                            <div className={style.gongneng}>
                                <img className={style.image} src={'https://image.hongbeibang.com/FnuWoFzlqjbUFcZHkVG64M-cKA_N?48X48&imageView2/1/w/48/h/48'} />
                                <span>我的课程</span>
                                <img className={style.imgh1} src={'https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46'} />
                            </div>
                        </div>
                    </Link>
                </div>
                <div style={{ width: '100%', height: '10px', background: 'whitesmoke' }}></div>
                <div style={{ marginLeft: '15px' }}>
                    <Link to={"/history"}>
                        <div className={style.gongnengs}>
                            <div className={style.gongneng}>
                                <img className={style.image} src={'https://image.hongbeibang.com/FloihK3c4UsgFSSuiI6ZNNFiYWHN?48X48&imageView2/1/w/48/h/48'} />
                                <span>浏览记录</span>
                                <img className={style.imgh1} src={'https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46'} />
                            </div>
                        </div>
                    </Link>
                    <Link to={"/apply"}>
                        <div className={style.gongnengs}>
                            <div className={style.gongneng}>
                                <img className={style.image} src={'https://image.hongbeibang.com/FrIG0d-LU4bOADQE1euyCOGWO7Ep?48X48&imageView2/1/w/48/h/48'} />
                                <span>达人申请</span>
                                <img className={style.imgh1} src={'https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46'} />
                            </div>
                        </div>
                    </Link>
                    <Link to={"/help"}>
                        <div className={style.gongnengs}>
                            <div className={style.gongneng}>
                                <img className={style.image} src={'https://image.hongbeibang.com/Fn2YVwr3Ng_AQlJvQCWtBoRBDyjR?48X48&imageView2/1/w/48/h/48'} />
                                <span>我的帮贡</span>
                                <img className={style.imgh1} src={'https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46'} />
                            </div>
                        </div>
                    </Link>
                </div>


            </div>
        </div>)
    }

    async componentDidMount() {
        const { data } = await axios.get("/user/personalSet", {
            params: {
                userName: localStorage.userName
            }
        })
        this.setState({
            user: data.user
        })

    }
};






