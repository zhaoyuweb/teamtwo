import React from "react";
import { NavLink, Route } from "react-router-dom";
import Recipes from "./collects/Recipes";
import Menu from "./collects/Menu";
import Question from "./collects/Question";
import Artical from "./collects/Article"
import style from "../../assets/css/xiaowo.module.css"


export default class Collect extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
    }
    back() {
        this.props.history.push("/xiaowo")
    }

    render() {
        return (
            <div>
                <div className={style.seth}>
                    <img onClick={this.back.bind(this)} className={style.setimg} src={'https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48'} />
                    <div style={{float:"left",background:"whitesmoke",marginTop:"5px"}}>
                        <img style={{width:"18px",height:"18px",float:"left",marginTop:"10px"}} src="https://image.hongbeibang.com/FltPAS-35CZfvSpnHacXWoqcfFz5?42X42&imageView2/1/w/42/h/42" alt="" />
                        <input placeholder="搜索收藏内容" type="search" className={style.inp} />
                    </div>
                    <p style={{ float: "right",fontSize:"16px",marginRight:"20px",marginTop:"10px"}}>搜索</p>
                </div>



                <nav className={style.danghang}>
                    <NavLink className={"App-link"} exact activeClassName={style.active} to={"/collect"}>食谱</NavLink>
                    <NavLink className={"App-link"} activeClassName={style.active} to={"/collect/menu"}>食单</NavLink>
                    <NavLink className={"App-link"} activeClassName={style.active} to={"/collect/question"}>问答</NavLink>
                    <NavLink className={"App-link"} activeClassName={style.active} to={"/collect/artical"}>文章</NavLink>
                </nav>
                <Route component={Recipes} exact path={"/collect"}></Route>
                <Route component={Menu} exact path={"/collect/menu"}></Route>
                <Route component={Question} path={"/collect/question"}></Route>
                <Route component={Artical} path={"/collect/artical"}></Route>

                <img style={{width: "399px", height: "92px"}} src={"https://image.hongbeibang.com/FkWT1DTkgRDLyx2rpWSU8WzA7Yo5"}/>
            </div>
        )
    }
}