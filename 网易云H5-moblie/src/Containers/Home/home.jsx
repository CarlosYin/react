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

import Header from '../../Components/Header/header.jsx';

import HomeHot from '../../Components/HomeHot/homehot.jsx';

import { Tabs, WhiteSpace } from 'antd-mobile';

const tabs = [
  { title: '推荐音乐' },
  { title: '热歌榜' },
  { title: '搜索' },
];


export default class HomePage extends Component {



  renderTabBar = (props) => {
    return (<Tabs.DefaultTabBar {...props} />);
  }

  render() {
    return (
      <div className="m-home">
        <Header />
        <div className="m-tabarea m-tabarea-index">
          <Tabs tabs={tabs}
            initalPage={'t2'}
            renderTabBar={this.renderTabBar}
          >
            <div className="tabctitem">
              <HomeHot />
            </div>
            <div className="tabctitem">
              Content of second tab
            </div>
            <div className="tabctitem">
              Content of third tab
            </div>
          </Tabs>
        </div>
      </div>
    )
  }
}


