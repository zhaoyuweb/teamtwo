import React, { Component } from 'react';
import 'element-theme-default';
import style from "./plus.module.css"
import {
    Link
} from "react-router-dom"
class Plus extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>

                <Link to={{ pathname: "/" }}><img className={style.ds} src="https://image.hongbeibang.com/FvpCr89mpooArX7SM26_s5CqdeNL?imageMogr2/strip/thumbnail/640x640" alt="" /></Link>
                <div className={style.dp}>
                    <img src="https://image.hongbeibang.com/Fnz_NOU0VlNn-t_hLcXFbatBze_C?imageMogr2/strip/thumbnail/640x640" alt="" />
                    <p>上传食谱</p>
                </div>
                <div className={style.dp1}>
                    <img src="https://image.hongbeibang.com/FtUJvHaECXwl58x67bktx4KSjnym?imageMogr2/strip/thumbnail/640x640" alt="" />
                    <p>上传作品</p>
                </div>


            </div>
        )
    }
}
export default Plus;