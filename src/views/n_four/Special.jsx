import React from "react";
import axios from "axios"
import style from "../../assets/css/xiaowo.module.css"
import { connect } from "react-redux"
import { changeActivity } from "../../store/actionCreator/four"
class Special extends React.Component {
   constructor(props){
    super(props);
    this.scrollListener = this.scrollFun.bind(this);
}

    back() {
        this.props.history.go(-1)
    }

    changeIndex(){
        this.setState({
            pageIndex:this.pageIndex+10
        })
    }

    render() {
        return (
            <div>
                <div className={style.seth}>
                    <img onClick={this.back.bind(this)} className={style.setimg} src={'https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48'} />
                    <h4 className={style.set}>精彩活动</h4>
                </div>

                {
                    this.props.activityData.map((v, index) => (
                        <div key={index} style={{ width: "368px", marginLeft: "16px", height: "268px" }}>
                            <div style={{ width: "100%", height: "184px", background: "red", borderRadius: '5px' }}>
                                <img style={{ width: "100%", height: "100%" }} src={v.coverImage} />
                            </div>

                            <div style={{ marginTop: "10px" }}>
                                <div style={{ width: "263px", height: '64px', float: "left" }}>
                                    <p style={{ fontSize: '16px', color: "#4A4945", marginBottom: '5px' }}>[结束]{v.coverTitle.substring(0, 11)}...</p>
                                    <p style={{ fontSize: '14px', color: "#999999" }}>{v.introduce.substring(0, 14)}...</p>
                                </div>
                                <div style={{ width: "105px", height: '64px', float: "left" }}>
                                    <span style={{ marginRight: '10px' }}>{v.activityEndTime.substring(5, 16)}</span>
                                    <span>截止</span>
                                </div>
                            </div>
                        </div>
                    ))
                }

                {/* <input type={"button"} value={"加载更多"} onClick={this.props.getActivity.bind(this)}/> */}


            </div>
        )
    }

    scrollFun() {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        if ((scrollHeight - scrollTop)-clientHeight<10) {
            this.props.getActivity.call(this)
        }
    }

    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollListener);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollListener)
        console.log(this.props)
        this.props.getActivity.call(this)
    }
}

function mapStateToProps(state) {
    return {
        pageIndex: state.four.pageIndex,
        pageSize: state.four.pageSize,
        activityData: state.four.activityData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        async getActivity() {
            const { data } = await axios.get("/api/activity/getActivitys", {
                params: {
                    pageIndex:this.props.pageIndex,
                    pageSize:this.props.pageSize

                }
            })
            dispatch(changeActivity(data.data.data))
            console.log(data.data.data)

        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Special)