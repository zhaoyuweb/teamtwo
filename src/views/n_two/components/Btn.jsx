import React, { Component } from 'react';
import style from "../css/header.module.css"
import Axios from 'axios';

class Btn extends Component {
    //     https://api.hongbeibang.com/community/getByLimit?isShow=4&_t=1588573530956&csrfToken=&pageIndex=0&pageSize=99
    constructor(props) {
        super(props);
        this.state = {
            count: [],
            color: ['#94BFBB', '#927472', '#E5AA9C', '#5BADA6', '#B78B9F', '#ABCCC9', '#8F7671', 'blue', 'yellow', 'pink', 'orange']
        }

    }
    async componentDidMount() {
        const { data } = await Axios.get("/api/community/getByLimit", {
            params: {
                isShow: 4,
                _t: Date.now(),
                pageIndex: 0,
                pageSize: 99
            }
        })
        const btn = data.data
        console.log(1000, btn.data)
        this.setState({
            count: btn.data,

        })
    }

    render() {
        return (
            <div className={style.middleBtn}>

                {
                    this.state.count.map((v, index) =>

                        <div style={{ backgroundColor: this.state.color[index] }} key={index} className={style.middleBtnDiv}>
                            <div className={style.middleBtnText}>{v.name}</div>
                        </div>



                    )
                }

            </div>
        );
    }
}

export default Btn;