import React from "react";
import style from "../../assets/css/xiaowo.module.css"
import { Link } from "react-router-dom";
export default class set extends React.Component {
    constructor(props) {
        super(props)
    }

    back(){
        this.props.history.go(-1)
    }

    render() {
        return (
            <div>
                <div className={style.seth}>
                    <img onClick={this.back.bind(this)} className={style.setimg} src={'https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48'} />
                    <h4 className={style.set}>设置</h4>
                </div>

                <div>
                    <Link to={"/personalSet"}>
                        <div style={{ width: '100%', height: '44px', overflow: 'hidden' }}>
                            <div className={style.zhineng}>
                                <span>个人设置</span>
                                <img className={style.imgz2} src={'https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46'} />
                            </div>
                        </div>
                    </Link>

                    <div style={{ width: '100%', height: '43px', overflow: 'hidden' }}>
                        <div className={style.zhineng1}>
                            <span>账户设置</span>
                            <img className={style.imgz2} src={'https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46'} />
                        </div>
                    </div>
                    <div style={{ width: '100%', height: '10px', background: 'whitesmoke' }}></div>
                </div>


                <div>
                    <div style={{ width: '100%', height: '44px', overflow: 'hidden' }}>
                        <div className={style.zhineng}>
                            <span>意见反馈</span>
                            <img className={style.imgz2} src={'https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46'} />
                        </div>
                    </div>

                    <div style={{ width: '100%', height: '44px', overflow: 'hidden' }}>
                        <div className={style.zhineng}>
                            <span>用户守则</span>
                            <img className={style.imgz2} src={'https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46'} />
                        </div>
                    </div>

                    <div style={{ width: '100%', height: '44px', overflow: 'hidden' }}>
                        <div className={style.zhineng}>
                            <span>关于我们</span>
                            <img className={style.imgz2} src={'https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46'} />
                        </div>
                    </div>
                    <div style={{ width: '100%', height: '43px', overflow: 'hidden' }}>
                        <div className={style.zhineng1}>
                            <span>商务合作</span>
                            <img className={style.imgz2} src={'https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46'} />
                        </div>
                    </div>
                    <div style={{ width: '100%', height: '10px', background: 'whitesmoke' }}></div>
                </div>


                <input onClick={this.outLogin.bind(this)} type={"button"} value={"退出登录"} className={style.btn}/>

            </div>
        )
    }

    outLogin(){
        localStorage.clear();
        this.props.history.push("/login")
    }
}