import React from "react";
import style from "../../assets/css/xiaowo.module.css"
export default class History extends React.Component{
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
                    <h4 className={style.set}>浏览记录</h4>
                </div>

                <img style={{width:"360px",height:"450px",marginLeft:"20px",marginTop:"10px"}} src={"https://image.hongbeibang.com/FvDjl87RXM_R1x1VEHuSJ7Pb-x_e?640X900&imageView2/1/w/640/h/896"}/>

            </div>
        )
    }
}