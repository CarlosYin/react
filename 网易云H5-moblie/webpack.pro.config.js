/*
*
*   文件简介:生产配置 npm run build
*   作者:carlosYin
*   更新时间:2017-10-24 14:34:49
*
*
*/
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: __dirname + "/src/main.js",
  output: {
    path: __dirname + "/release",
    filename: '[name].[hash:8].bundle.js',
    chunkFilename: 'js/[name]-[id].[hash:8].bundle.js',
  },
  module: {
    loaders: [
      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract("css-loader","postcss-loader")
      },
      {
          test: /(\.jsx|\.js)$/,
          loader: "babel-loader",
          exclude: /node_modules/
      }
  ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("carlosyin.css"),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.tmpl.html"
    }),
  ]
}