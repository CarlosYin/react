/*
*
*   文件简介:程序主入口
*   作者:carlosYin
*   更新时间:2017-10-24 14:34:49
*
*
*/

import React from 'react';
import { render } from 'react-dom';
import RouteConfig from './router.config';//使用路由配置


import 'antd-mobile/dist/antd-mobile.css';
import './Containers/base.css';

render(<RouteConfig />, document.querySelector('#j-app'));
