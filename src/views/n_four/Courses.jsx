import React from "react";
export default class Sign extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div style={{ width: "100%", height: "88px" }}>
                    <img style={{ width: "282px", height: "88px", marginLeft: "59px" }} src={"https://image.hongbeibang.com/FhGntq9cteLqYmKBst8odEj2js4a"} />
                    
                </div>
                <p style={{ fontSize: "15px", textAlign: "center" }}>安装并打开烘焙帮APP，进入【学堂】-【我的课程】</p>
                <p style={{ fontSize: "15px", textAlign: "center" }}>使用当前微信登陆，即可开始上课啦！</p>
                <img style={{width: "390px", height: "311px",marginLeft:"5px"}} src={"https://image.hongbeibang.com/FmT6ScIhrkuIb-nLzojIfZ7ifG_r"}/>
                <img style={{width: "399px", height: "92px"}} src={"https://image.hongbeibang.com/FkWT1DTkgRDLyx2rpWSU8WzA7Yo5"}/>
                
            </div>
        )
    }
}