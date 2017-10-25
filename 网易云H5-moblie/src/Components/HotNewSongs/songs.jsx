/*
*
*   文件简介:头部组件
*   作者:carlosYin
*   更新时间:2017年10月24日17:05:02
*
*
*/
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom';

import _map from 'lodash/map';


export default class HotNewSongs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      row: 0
    };
  }




  componentDidMount() {

  }


  renderSongs = () => {
    const { data } = this.props;
    return _map(data, (item, i) => {
      return (
        <Link key={item.name} to={item.url} className="m-sgitem">
          <div className="sgfr f-bd f-bd-btm">
            <div className="sgchfl">
              <div className="f-thide sgtl">{item.name}</div>
              <div className="f-thide sginfo"><i className="u-hmsprt sghot"></i>{item.title} - {item.name}</div>
            </div>
            <div className="sgchfr">
              <span className="u-hmsprt sgchply"></span>
            </div>
          </div>
        </Link>
      )
    })
  }


  //下载app事件
  DownApp = () => {

  }


  render() {
    return (
      <div className="remd_newsg" data-reactid="84">
        <div className="m-sglst">
          {this.renderSongs()}
        </div>
      </div>
    )
  }
}
