# 前言

基础的脚手架，不定期维护。

__注：此项目纯属个人瞎搞，如有任何版权问题请联系本人。__


## 技术栈

react + react-sticky + react-router + babel + babel-polyfill + bundle + webpack + postcss + ant-mobile 


## 项目运行

#### 注意：由于涉及大量的 ES6/7 等新属性，node 需要 6.0 以上版本 

```
git clone https://github.com/CarlosYin/react.git

cd react/react基础脚手架

npm install

npm start / npm run build

``` 


# 说明

>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

>  或者您可以 "follow" 一下，我会不断开源更多的有趣的项目

>  开发环境 macOS 10.12.3  Chrome 56  nodejs 6.10.0



# 项目布局

```
.
├── release                                     // 发布目录
├── src                                         // 源码目录
│   ├── Cmponents                               // 组件
│   ├── Containers                              // 页面
│   │   ├── 404                                 // 404
│   │   ├── Home                                // 首页
│   │   └── base.css                            // 全局css
│   ├── bundle.js                               // 处理热加载js
│   ├── index.tmpl.html                         // 页面入口模版html
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
│   ├── postcss.config.js                       // postcss的配置文件
│   └── router.config.js                        // 路由配置文件
├── .babelrc                                    // babel配置文件
├── webpack.dev.config.js                       // 开发环境的webpack配置文件
└── webpack.pro.config.js                       // 生产环境的webpack配置文件
.
```
