import React, { Component } from 'react';
import style from "../css/header.module.css"
import axios from "axios"
class Guanggao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemImg: []
        }

    }
    // https://api.hongbeibang.com/feed/getCategory?_t=1588569284210&csrfToken=
    async  componentDidMount() {
        const { data } = await axios.get("/api/feed/getCategory?_t=" + Date.now())
        // console.log(111, data.data.category);
        const item = data.data.category[0].item;//广告轮播图
        console.log(item)
        this.setState({
            itemImg: item
        })

    }

    render() {
        return (
            <div>
                <div className={style.middle}>
                    {this.state.itemImg.map((v, index) =>
                        <div key={index} className={style.middleDiv}>
                            <img className={style.middleImg} src={v.image} alt="" />
                        </div>
                    )}

                </div>
            </div>
        );
    }
}

export default Guanggao;