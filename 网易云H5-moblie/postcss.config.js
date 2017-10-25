/*
*
*   文件简介:postcss处理 自动添加前缀
*   作者:carlosYin
*   更新时间:2017-10-24 14:34:49
*
*
*/

module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-nested'),
    ]
} 