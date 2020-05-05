import React from "react";
import style from "../../assets/css/xiaowo.module.css"
export default class Medal extends React.Component {
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
                    <h4 className={style.set}>我的勋章</h4>
                </div>
                <div style={{ width: "100%", height: "16px", marginBottom: "5px" }}>
                    <span style={{ marginLeft: "15px", fontSize: "16px", color: "#4A4945", marginRight: "15px" }}>日常勋章</span>
                    <span style={{ fontSize: "14px", color: "#999999" }}>(已获得0枚)</span>
                </div>

                <div className={style.xunzhang}>
                    <div style={{width:"110px",height:"140px"}}>
                        <img style={{width:"97px",height:"97px",marginBottom:"10px"}} src={"https://image.hongbeibang.com/Fjunjg6SonYJRc83IbZ9hFMWmQke?1200X1200&imageView2/1/w/180/h/180"} />
                        <p style={{fontSize:"12px",color:"#999999"}}> 一级任务勋章</p>
                    </div>
                    <div style={{width:"110",height:"140px"}}>
                        <img style={{width:"97px",height:"97px",marginBottom:"10px"}} src={"https://image.hongbeibang.com/Fjunjg6SonYJRc83IbZ9hFMWmQke?1200X1200&imageView2/1/w/180/h/180"} />
                        <p style={{fontSize:"12px",color:"#999999"}}> 一级任务勋章</p>
                    </div>
                    <div style={{width:"110",height:"140px"}}>
                        <img style={{width:"97px",height:"97px",marginBottom:"10px"}} src={"https://image.hongbeibang.com/Fjunjg6SonYJRc83IbZ9hFMWmQke?1200X1200&imageView2/1/w/180/h/180"} />
                        <p style={{fontSize:"12px",color:"#999999"}}> 一级任务勋章</p>
                    </div>
                    <div style={{width:"110px",height:"140px"}}>
                        <img style={{width:"97px",height:"97px",marginBottom:"10px"}} src={"https://image.hongbeibang.com/Fjunjg6SonYJRc83IbZ9hFMWmQke?1200X1200&imageView2/1/w/180/h/180"} />
                        <p style={{fontSize:"12px",color:"#999999"}}> 一级任务勋章</p>
                    </div>
                    <div style={{width:"110",height:"140px"}}>
                        <img style={{width:"97px",height:"97px",marginBottom:"10px"}} src={"https://image.hongbeibang.com/Fjunjg6SonYJRc83IbZ9hFMWmQke?1200X1200&imageView2/1/w/180/h/180"} />
                        <p style={{fontSize:"12px",color:"#999999"}}> 一级任务勋章</p>
                    </div>
                    <div style={{width:"110",height:"140px"}}>
                        <img style={{width:"97px",height:"97px",marginBottom:"10px"}} src={"https://image.hongbeibang.com/Fjunjg6SonYJRc83IbZ9hFMWmQke?1200X1200&imageView2/1/w/180/h/180"} />
                        <p style={{fontSize:"12px",color:"#999999"}}> 一级任务勋章</p>
                    </div>

                </div>
                <div style={{ width: '100%', height: '15px', background: 'whitesmoke' }}></div>
            </div>
        )
    }
}