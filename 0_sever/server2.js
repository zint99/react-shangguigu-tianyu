const express = require('express')
const app = express()

// 实现一个WEB服务器


app.use((request, response, next) => {
    console.log('有人请求服务器server2了');
    next()
})

app.get('/cars', (request, response) => {
    // 允许跨域
    response.header("Access-Control-Allow-Origin", "*");
    // 服务器学生信息数据
    const cars = [
        { id: '001', name: 'Benz', price: 100 },
        { id: '002', name: 'BMW', price: 90 },
        { id: '003', name: 'Audi', price: 80 },
    ]
    response.send(cars)
})

app.listen(5001, (err) => {
    if (!err) {
        console.log('成功启动服务器！请求学生信息地址为http://localhost:5001/cars');
    }
})