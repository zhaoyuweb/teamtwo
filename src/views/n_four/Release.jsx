import React from "react";
import style from "../../assets/css/xiaowo.module.css"
export default class Release extends React.Component{
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
                    <div className={style.toubu}>
                        <p className={style.toubup}>作品</p>
                        <p className={style.toubup}>食谱</p>
                        <p className={style.toubup}>问答</p>

                    </div>
                    
                </div>
                <img style={{width:"360px",height:"450px",marginLeft:"20px",marginTop:"10px"}} src={"https://image.hongbeibang.com/FmfzejiFfLOxonYJKYwr0oLJT7I5?640X900&imageView2/1/w/640/h/896"}/>
                
            </div>
        )
    }
}