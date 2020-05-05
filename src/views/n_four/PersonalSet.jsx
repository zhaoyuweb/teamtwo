import React from "react";
import style from "../../assets/css/xiaowo.module.css"
import axios from "axios";
export default class PersonalSet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user:{}
        }
    }

    back(){
        this.props.history.go(-1)
    }

    render() {
        const {userName,sex,describe,email}=this.state.user
        return (
            <div>
                <div className={style.seth}>
                    <img onClick={this.back.bind(this)} className={style.setimg} src={'https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48'} />
                    <h4 className={style.set}>个人资料</h4>
                </div>


                <div style={{ width: '100%', height: '56px' }}>
                    <div className={style.tou}>
                        <p className={style.tuxiang}>头像:</p>
                        <img className={style.imgt} src={'https://image.hongbeibang.com/FnOs-rk9erEuSVo0abmlGs7CD_Qz?460X460&imageView2/1/w/160/h/160'} />
                    </div>
                </div>
                <div style={{ width: '100%', height: '10px', background: 'whitesmoke' }}></div>

                <div style={{ width: '100%', height: '56px' }}>
                    <div className={style.tps}>
                        <span className={style.tuxiang}>昵称:</span>
                        <span className={style.tuxiang1}>{userName}</span>
                    </div>
                </div>
                <div style={{ width: '100%', height: '56px' }}>
                    <div className={style.tps}>
                        <span className={style.tuxiang}>性别:</span>
                        <span className={style.tuxiang1}>{sex}</span>
                    </div>
                </div>
                <div style={{ width: '100%', height: '56px' }}>
                    <div className={style.tou}>
                        <span className={style.tuxiang}>简介:</span>
                        <span className={style.tuxiang1}>{describe}</span>
                    </div>
                </div>
                <div style={{ width: '100%', height: '10px', background: 'whitesmoke' }}></div>

                <div style={{ width: '100%', height: '56px' }}>
                    <div className={style.tps}>
                        <span className={style.tuxiang}>邮箱:</span>
                        <span className={style.tuxiang1}>{email}</span>
                    </div>
                </div>
                <div style={{ width: '100%', height: '56px' }}>
                    <div className={style.tou}>
                        <span className={style.tuxiang}>收货信息:</span>
                        <span className={style.tuxiang1}>ldskhjdklsahg</span>
                    </div>
                </div>
                <div style={{ width: '100%', height: '10px', background: 'whitesmoke' }}></div>
            </div>
        )
    }

    async componentDidMount(){
        const {data}=await axios.get("/user/personalSet",{
            params:{
                userName:localStorage.userName
            }
        })
        this.setState({
            user:data.user
        })
    }
}
