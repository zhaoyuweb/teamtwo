import React, { Component } from 'react';
import style from "../assets/css/login.module.css"
import axios from "axios"
export default class login extends Component {
    constructor(props) {
        super(props);
        this.userName=null;
        this.passWord=null
        this.state = {
            user:{}
        }
    }
    render() {
        return (<div>
            <div style={{ width: '100%', height: '64px' }}>
                <span className={style.quxiao}>取消</span>
                <h4 className={style.denglu}>登录</h4>
            </div>

            <div style={{ width: '100%', height: '66px'}}>
                <img className={style.imgs} src={'https://image.hongbeibang.com/Fuxcd1wWFCY-HNifMfUbrcVBqxlc?50X50&imageView2/1/w/50/h/50'} />
                <div className={style.zhangh}>
                    <span className={style.zhangspan}>+86</span>
                    <input ref={e=>this.userName=e} className={style.zhinput} type={"text"} placeholder={"请输入用户名"} />
                </div>
            </div>

            <div style={{ width: '100%', height: '66px',overflow:'hidden' }}>
                <img className={style.imgs} src={'https://image.hongbeibang.com/FhVd-FHn1W_yhi5vMjtsAQGSicId?50X50&imageView2/1/w/50/h/50'} />
                <input ref={e=>this.passWord=e} className={style.minput} type={"text"} placeholder={"请输入密码"} />
            </div>

            <div style={{ width: '100%', height: '70px'}}>
                <input onClick={this.login.bind(this)} className={style.denglu1} type={"button"} value={"登录"}/>
            </div>

            <div style={{fontSize:'16px',color:'#999999',marginTop:'30px',textAlign:'center'}}>第三方账户登录</div>

            <div style={{marginTop:'20px'}}>
                <img className={style.imgv} src={'https://image.hongbeibang.com/FmQ44nNcTSqmWx3s9wT0hUUBMPb1?200X200&imageView2/1/w/140/h/140'}/>
                <img className={style.imgq} src={'https://image.hongbeibang.com/Fq_j5DBvHFjeXIgXq-fFFDtiIvq5?200X200&imageView2/1/w/140/h/140'}/>
            </div>

            <div style={{fontSize:'20px',color:'#1976d2',marginTop:'30px',textAlign:'center'}}>快速注册</div>

        </div>)
    }

   async login(){
       const {data}=await axios.post("/user/login",{
           userName:this.userName.value,
           passWord:this.passWord.value
       });
       if(data.ok===1){
           this.setState({
               user:data.user
           });
           localStorage.userName=data.user.userName
           this.props.history.go(-1)
        }else{
            alert(data.msg)
        }

       console.log(data.user)
       
   }
}