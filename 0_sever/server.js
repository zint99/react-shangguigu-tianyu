const express = require('express')
const app = express()

// 实现一个WEB服务器
app.use((request, response, next) => {
    console.log('有人请求服务器了');
    next()
})

// 建立路由规则
app.get('/students', (request, response) => {
    // 允许跨域
    response.header("Access-Control-Allow-Origin", "*");
    // 服务器学生信息数据
    const students = [
        { id: '001', name: '许巍', age: 40 },
        { id: '002', name: '朴树', age: 30 },
        { id: '003', name: '汪峰', age: 45 },
    ]
    response.send(students)
})

app.listen(5000, (err) => {
    if (!err) {
        console.log('成功启动服务器！请求学生信息地址为http://localhost:5000/students');
    }
})