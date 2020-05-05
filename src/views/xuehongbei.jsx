import React, { Component } from 'react';
import Top from './n_one/top'
import Middle from './n_one/middle'
import Xueinfo from './n_one/xueinfo'
// import Top from "./n_one/top"
export default class xuehongbei extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div style={{ position: "relative", top: 0, zIndex: 1, overflow: "hidden" }}>
            <Top />
            <Middle />
            <Xueinfo />

        </div>)
    }
}