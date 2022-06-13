import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


// 渲染组件到页面
// 注意index.html中的容器id为root，此处写错了id名
// ReactDOM.render(<App />, document.querySelector('#rooter'))
// 正确写法
ReactDOM.render(<App />, document.querySelector('#root'))