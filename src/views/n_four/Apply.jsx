import React from "react";
import style from "../../assets/css/xiaowo.module.css"
export default class Apply extends React.Component{
    constructor(props){
        super(props)
    }
    back(){
        this.props.history.go(-1)
    }
    render(){
        return(
            <div>
                <div className={style.seth}>
                    <img onClick={this.back.bind(this)} className={style.setimg} src={'https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48'} />
                    <h4 className={style.set}>烘培帮</h4>
                </div>
                <h6 style={{fontSize:"18px",color:"#4A4945",textAlign:"center",marginBottom:"10px"}}>什么是食谱达人</h6>
                <div style={{width:"354px",marginLeft:"23px",marginBottom:"20px"}}>
                    <div style={{fontSize:"14px",color:"#4A4945",lineHeight:"20px",marginBottom:"10px"}}>烘焙帮活跃优质达人，热爱烘焙并对烘焙有深度见解，制作能力强，能够上传优质烘焙内容（优秀食谱、作品、测评、视频等）。与烘焙帮共同创造优质烘焙社区，共同成长。</div>
                    <h6 style={{fontSize:"14px",color:"#1976D2"}}>达人特权</h6>
                </div>

                <h6 style={{fontSize:"18px",color:"#4A4945",textAlign:"center",marginBottom:"10px"}}>怎样成为食谱达人</h6>
                <div style={{width:"354px",marginLeft:"23px",marginBottom:"20px"}}>
                    <div style={{fontSize:"14px",color:"#4A4945",lineHeight:"20px",marginBottom:"10px"}}>达到以下要求，可通过达人认证，成为食谱达人：</div>
                    <div style={{fontSize:"14px",color:"#4A4945",lineHeight:"20px",marginBottom:"10px"}}>1. 至少上传20篇烘焙类食谱，且被推荐首页8次以上（头条日被推荐的食谱不计）</div>
                    <div style={{fontSize:"14px",color:"#4A4945",lineHeight:"20px",marginBottom:"10px"}}>2.或者上传的食谱中，有5篇以上位<span style={{fontSize:"14px",color:"#1976D2"}}>优秀食谱</span>；</div>
                    <div style={{fontSize:"14px",color:"#4A4945",lineHeight:"20px",marginBottom:"10px"}}>凡满足以上两个要求之一，都可以申请成为达人</div>
                    
                </div>

                <h6 style={{fontSize:"18px",color:"#4A4945",textAlign:"center",marginBottom:"10px"}}>食谱达人特权</h6>
                <div style={{width:"354px",marginLeft:"23px",marginBottom:"20px"}}>
                    <div style={{fontSize:"14px",color:"#4A4945",lineHeight:"20px",marginBottom:"10px"}}>1. 专属达人勋章全站展示；</div>
                    <div style={{fontSize:"14px",color:"#4A4945",lineHeight:"20px",marginBottom:"10px"}}>2. 优先参与产品试用活动；</div>
                    <div style={{fontSize:"14px",color:"#4A4945",lineHeight:"20px",marginBottom:"10px"}}>3. 站内上传食谱奖励300帮贡。</div>
                    
                </div>

                <h6 style={{fontSize:"18px",color:"#4A4945",textAlign:"center",marginBottom:"10px"}}>食谱达人要求</h6>
                <div style={{width:"354px",marginLeft:"23px",marginBottom:"20px"}}>
                    <div style={{fontSize:"14px",color:"#4A4945",lineHeight:"20px",marginBottom:"10px"}}>1.食谱达人须每月至少上传一篇优秀食谱，否则勋章将会被收回</div>
                    <div style={{fontSize:"14px",color:"#4A4945",lineHeight:"20px",marginBottom:"10px"}}>2. 食谱达人需遵守<span style={{fontSize:"14px",color:"#1976D2"}}>烘焙帮社区规范</span>；</div>
                    <div style={{fontSize:"14px",color:"#4A4945",lineHeight:"20px",marginBottom:"10px"}}>3. 食谱达人需进入“烘焙帮美食达人群”，不得擅自退群。</div>
                    
                </div>

                <h6 style={{fontSize:"18px",color:"#4A4945",textAlign:"center",marginBottom:"10px"}}>您当前的状态?</h6>
                <div style={{fontSize:"14px",color:"#999999",textAlign:"center",marginBottom:"10px"}}>您当前不是食谱达人</div>

                <div style={{ width: '100%', height:"40px", background: 'whitesmoke',overflow:"hidden" }}>
                    <div style={{fontSize:"18px",color:"#4A4945",textAlign:"center",marginTop:"10px"}}>申请认证</div>

                </div>
                <div style={{fontSize:"14px",color:"#999999",textAlign:"center",marginBottom:"10px",marginTop:"10px"}}>每隔15天可申请一次</div>
                <div style={{fontSize:"14px",color:"#999999",textAlign:"center",marginBottom:"10px"}}>将在3个工作日内完成审核并私信通知结果</div>
            </div>

        )
    }
}