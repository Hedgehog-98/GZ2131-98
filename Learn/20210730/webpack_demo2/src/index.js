import _ from 'lodash';
import './style.css';
// 引入图片
import "./images/longmao.webp"
// 引入json
import data from "./data/data.json"

// 引入 print.js中的printMe函数
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    // 新建一个按钮
    const btn = document.createElement('button');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // 添加样式
    element.classList.add('hello');

    // 新建一个图片
   
    var oImg = document.createElement('img');
    element.appendChild(oImg);
    
    // console.log(data,data.username,data.age);
    btn.innerHTML = 'Click me and check the console';
    // 调用printMe函数
    btn.onclick = printMe;
    element.appendChild(btn);
    
    return element;
}

document.body.appendChild(component());
// 使用热模块替换
if (module.hot) {
    module.hot.accept('./print.js', function() {
      console.log('Accepting the updated printMe module!');
      printMe();
    })
  }