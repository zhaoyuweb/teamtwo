import React, { Component } from 'react';
import 'element-theme-default';
import style from "./middlebox.module.css"
import axios from "axios";
import {
    Link
} from "react-router-dom"
class Middlebox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: []
        };
    }

    render() {
        return (
            <div>
                <Link to={{ pathname: "/" }}><img className={style.im1} src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="" /></Link>
                {
                    this.state.info.map(v => (
                        <div className={style.dl} key={v.contentId}>
                            <img src={v.image} alt="" />
                            <p>{v.title}</p>
                        </div>
                    ))
                }
            </div>
        )
    }
    async componentDidMount() {
        this.listJq();
    }
    async listJq() {
        const { data } = await axios.get("/api/education/getNewbieGuide?type=5&_t=1588660338085&csrfToken=");
        console.log(data.data.courseGuide);
        // 对数据进行了二次过滤。
        // data.data.category.splice(0, 1);
        const info = data.data.courseGuide;
        this.setState({
            info
        })
    }
}
export default Middlebox;