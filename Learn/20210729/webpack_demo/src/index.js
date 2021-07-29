
// import _ from 'lodash'
import _ from 'lodash/array'
// 引入css文件
import './style.css'
// 引入less文件
import './index.less'

// 引入图片
import './1.webp'

// 引入data文件  ES6
import Data from './data.xml'
import  Notes  from './data.csv'

// 引入
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';
// 输出
console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // 添加.hello类
    element.classList.add('hello');

    // 输出Data 和csv
    console.log(Data);
    console.log(Notes);
    
    return element;
  }
  
  document.body.appendChild(component());