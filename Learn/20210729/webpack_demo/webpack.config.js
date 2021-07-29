const path = require('path');

// 引入文件
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

module.exports = {
    entry: './src/index.js',
    output: {
        // filename: 'main.js',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    //添加模块加载规则
    module: {
        rules: [{
                test: /\.css$/i, //匹配css文件
                use: ['style-loader', 'css-loader'],
            },
            { //匹配less
                test: /\.less$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ],
            },
            { //匹配图片
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource',
            },
            { //匹配字体图标
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {//匹配csv|tsv
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
              },
              {//匹配xml文件
                test: /\.xml$/i,
                use: ['xml-loader'],
              },
              {//匹配toml
                test: /\.toml$/i,
                type: 'json',
                parser: {
                  parse: toml.parse,
                },
              },
              {//匹配yaml
                test: /\.yaml$/i,
                type: 'json',
                parser: {
                  parse: yaml.parse,
                },
              },
              {//匹配json5
                test: /\.json5$/i,
                type: 'json',
                parser: {
                  parse: json5.parse,
                },
              },

        ],
    },
};