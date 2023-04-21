const express = require('express')
const bodyParser = require('body-parser')
var server = express()

var route_login = require('./login.js')
var route_sales = require('./index/sales.js')
var route_product = require('./product/product.js')
var route_order = require('./order/order.js')


function origin(req, res, next) {
    if (req.method == 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type,token')
        res.setHeader('Access-Control-Allow-Methods', 'DELETE')
    }
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5173')
    next()
}
server.use(origin)


server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))


server.use(route_login)


function judgingLogin(req, res, next) {
    if (req.method == 'OPTIONS') {
        next()
    } else {
        if (!req.get('token')) {
            res.send({
                statusText: 'token does not exist',
            })
        } else {
            if (req.get('token') == '4b2c77e4-34cb-43be-83d9-6070d06fdadb') {
                next()
            } else {
                res.send({
                    statusText: 'token error',
                })
            }
        }
    }
}
server.use(judgingLogin)


server.use(route_sales)
server.use(route_product)
server.use(route_order)

server.listen(5172, function () {
    console.log('服务已在5172端口开启');
})