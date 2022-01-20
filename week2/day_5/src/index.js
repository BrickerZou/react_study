import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'  //只有js和jsx文件可以不加后缀
import store from './redux/store'

// store不渲染，我主动渲染
store.subscribe(()=>{ReactDOM.render(<App/>,document.getElementById('root'))}) 

ReactDOM.render(<App/>,document.getElementById('root'))


