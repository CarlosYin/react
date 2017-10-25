/*
*
*   文件简介:首页
*   作者:carlosYin
*   更新时间:2017-10-24 14:34:49
*
*
*/
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './home.css';



import { Button } from 'antd-mobile';

export default class HomePage extends Component {

  render() {
    return (
      <div className="m-hometop" data-reactid="2">
        <Button>Start</Button>
        <Link to="/404">404</Link>
      </div>
    )
  }
}


