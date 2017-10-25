/*
*
*   文件简介:路由配置文件
*   作者:carlosYin
*   更新时间:2017-10-24 14:34:49
*
*
*/

import React, { Component } from 'react';
import { HashRouter, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';


import HomePage from './Containers/Home/home.jsx';

import Bundle from './bundle.js';//处理异步加载js的bundle

//异步加载js
import P404Container from 'bundle-loader?lazy&name=carlosyin-[name]!./Containers/404/404.jsx';



const P404 = () => (
    <Bundle load={P404Container}>
        {(P404) => <P404 />}
    </Bundle>
)


//exact
class RouteConfig extends Component {
    render() {
        return (
            <HashRouter>
                <Router basename="/">
                    <div id="j-app" className="u-height">
                        <Route exact path="/" component={HomePage} />
                        <Route path="/404" component={P404} />
                    </div>
                </Router>
            </HashRouter>
        )
    }
}

export default RouteConfig
