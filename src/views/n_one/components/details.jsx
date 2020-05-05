import React, { Component } from 'react';
import 'element-theme-default';
import style from "./details.module.css"
import axios from "axios";
import {
    Link
} from "react-router-dom"
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {}
        };
    }

    render() {
        return (
            <div>

                <video style={{ width: 500, height: 500 }} poster={this.state.info.image} autoPlay="autoplay" src={this.state.info.playURL}></video>
                <Link to={{ pathname: "/" }}>
                    <div style={{ width: 50, height: 50 }}>返回主页</div>
                </Link>
            </div>
        )
    }
    async componentDidMount() {
        this.listDetails();
    }
    async listDetails() {
        const { data } = await axios.get(`/api/education/getCourse?_t=1588638959378&csrfToken=&educationCourseId=${this.props.location.state.courseId}`);
        console.log(data.data);
        // 对数据进行了二次过滤。
        // data.data.category.splice(0, 1);
        const info = data.data;
        this.setState({
            info
        })
    }
}
export default Details;