/*
*
*   文件简介:头部组件
*   作者:carlosYin
*   更新时间:2017年10月24日17:05:02
*
*
*/
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import { Flex, Grid } from 'antd-mobile';

import HotTopSongs from '../HotTopSongs/songs.jsx';
import HotNewSongs from '../HotNewSongs/songs.jsx';
import Footer from '../Footer/footer.jsx';


let data = [{
  icon: 'http://p1.music.126.net/tOc2PuOnmZ_DWRM_OGKC_A==/109951163033508225.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp',
  playnum: '299.1万',
  text: '初识不知曲中意，再听已是曲中人'

}, {
  icon: 'http://p1.music.126.net/OFFvrUVDx1rzXj2eeoPJ4g==/109951163047358998.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp',
  playnum: '109.1万',
  text: '电音//有点撩骚的萨克斯'
}, {
  icon: 'http://p1.music.126.net/3LbMYwTiQD5U3MCSgDPgdA==/109951163035317628.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp',
  playnum: '1316.2万',
  text: '「华语」哭泣使人乞讨，思念使人奔跑'
}, {
  icon: 'http://p1.music.126.net/1BQFT-akODSLM93bj4CQ2Q==/109951163041556034.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp',
  playnum: '372.3万',
  text: '电音史上最伟大的250首EDM音乐作品'
}, {
  icon: 'http://p1.music.126.net/6QbE9r2JeqBz3j3Kva--4A==/109951163038217098.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp',
  playnum: '221.2万',
  text: '古风殇恋｜待到红颜消 杳杳无归期'
}, {
  icon: 'http://p1.music.126.net/_vatT8yIOIRk9JddrKt7uQ==/109951163046086754.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp',
  playnum: '270.6万',
  text: '爱透了一个人，到底是一种什么体验'
}];

let newSongData = [{
  url:"/m/song?id=514765384",
  name:"BIG CITY RODEO",
  title:"GENERATIONS from EXILE TRIBE"
},{
  url:"/m/song?id=514765366",
  name:"饥饿游戏",
  title:"孔令奇 / GAI爷"
},{
  url:"/m/song?id=514765145",
  name:"그 사람을 아나요",
  title:"任昌丁"
},{
  url:"/m/song?id=514774150",
  name:"放不开 (No Way)",
  title:"Team Spark"
},{
  url:"/m/song?id=515143159",
  name:"아직 끝나지 않은 이야기",
  title:"还未完的故事"
},{
  url:"/m/song?id=514543438",
  name:"ダイヤ(ダイヤマーク)",
  title:"東京女子流"
},{
  url:"/m/song?id=514543440",
  name:"GET WILD PANDEMIC",
  title:"宇都宮隆"
},{
  url:"/m/song?id=514543396",
  name:"爱在上",
  title:"超级剧集《将军在上》主题曲"
},{
  url:"/m/song?id=514543356",
  name:"친구 말고 연애",
  title:"MySunset"
},{
  url:"/m/song?id=514761232",
  name:"十月一场",
  title:"花粥"
}]

  
  
  
  
  
  
  
  
  
  
  

export default class HomeHot extends Component {

  constructor() {
    super();
    this.state = {
      isLogin: true
    }

  }



  componentDidMount() {

  }



  render() {
    const { isLogin } = this.state;
    return (
      <div className="m-homeremd" data-reactid="48">
        <h2 className="remd_tl" data-reactid="49">推荐歌单</h2>
        <HotTopSongs
          data={data}
        />
        <h2 className="remd_tl" data-reactid="49">最新音乐</h2>
        <HotNewSongs
          data={newSongData}
        />
        <Footer />
      </div>

    )
  }
}


