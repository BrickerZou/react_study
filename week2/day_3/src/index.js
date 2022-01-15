import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'  //只有js和jsx文件可以不加后缀
import Hello from './components/Hello'  //默认Hello文件夹下的index.*


ReactDOM.render(<Hello/>,document.getElementById('root'))


