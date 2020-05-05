import React from "react";
import style from "../../assets/css/xiaowo.module.css"
export default class Sign extends React.Component {
    constructor(props) {
        super(props)
    }
    back() {
        this.props.history.go(-1)
    }

    render() {
        return (
            <div>
                <div className={style.seth}>
                    <img onClick={this.back.bind(this)} className={style.setimg} src={'https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48'} />
                    <div className={style.guize}>规则</div>
                </div>


                <div style={{ width: "100%", height: "80px" ,overflow:"hidden"}}>
                    <img className={style.imgz} src={'https://image.hongbeibang.com/FnOs-rk9erEuSVo0abmlGs7CD_Qz?460X460&imageView2/1/w/160/h/160'} />
                    <div style={{float:"left"}}>
                        <h6 style={{ fontSize: "18px", color: "#4A4945", marginTop: "20px" }}>您已连续签到0天</h6>
                        <p style={{ fontSize: "13px", color: "#999999" }}>超过了<span style={{ fontSize: "13px", color: "#FF8A6D" }}>0.00%</span>的帮友</p>
                    </div>
                    <input style={{ float: "right",marginTop: "30px",marginRight:"20px",
                    background:"#FF8A6D",width:"70px",height:"36px",
                    outline:"none" ,borderRadius:"20px",border:"0",color:"#fff"}} type={"button"} value={"签到"} />
                </div>

                <div style={{width:"100%",height:"400px"}}>
                    <img style={{width:"390px",height:"400px",marginLeft:"5px"}} src={"https://image.hongbeibang.com/Fj25EYQx95A0vODWadcZm_PH29u0?640X900&imageView2/1/w/640/h/896"}/>
                </div>

            </div>
        )
    }
}