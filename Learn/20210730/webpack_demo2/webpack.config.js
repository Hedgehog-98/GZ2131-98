const path = require('path');
// 引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // 入口文件
  // entry: './src/index.js',
  // 定义多个入口文件
  entry: {
    index: './src/index.js',
    // print: './src/print.js',
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      // 将自动生成一个新的html
      title: '管理输出',
      // 模板文件.html,这时title将不起作用，使用的是template生成的index.html
      template: "./public/index.html"
    }),
  ],
  // source-map映射具体出错代码
  devtool: 'inline-source-map',
  // 热更新
  devServer: {
    // 路径
    // contentBase: './dist',
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    // 默认端口
    port: 8080,
    // 热模块替换
    hot: true,
  },
  output: {
    // 输出的文件名(可自定义对应index标签引入的js文件)
    // filename: 'bundle.js',
    //name对应index和print
    // filename:'[name].bundle.js',
    // 根据内容生成唯一的js
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    // 清理dist文件夹
    clean: true,
    // 后端服务器
    publicPath: '/',
  },
  module: {
    rules: [{
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      { //匹配图片 注意jpeg和webp格式是新的图片格式
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
    ],
  },
};