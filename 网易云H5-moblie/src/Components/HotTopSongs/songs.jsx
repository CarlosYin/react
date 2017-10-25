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


export default class HotTopSongs extends Component {

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
    let trice = Math.ceil(data.length / 3);
    let mapArr = new Array(trice);
    return _map(mapArr, (item, i) => {
      return (
        <div key={data[i].icon} className="remd_ul">
          {this.renderSongByRow(data, i)}
        </div>
      )
    })
  }

  renderSongByRow = (RData, rowIdx) => {
    let beginIdx = rowIdx * 3;
    let mapArr = new Array(3);
    return _map(mapArr, (item, i) => {
      let _idx = beginIdx + i;
      let _item = RData[_idx];
      return (
        <a key={_item.icon} className="remd_li" href="/m/playlist?id=831845871">
          <div className="remd_img" data-reactid="53">
            <img className="u-img" src={_item.icon} />
            <span className="u-earp remd_lnum">{_item.playnum}</span>
          </div>
          <p className="remd_text" data-reactid="56">{_item.text}</p>
        </a>
      )
    })

  }

  //下载app事件
  DownApp = () => {

  }


  render() {
    return (
      <div className="remd_songs" data-reactid="50">
        {this.renderSongs()}
      </div>
    )
  }
}
