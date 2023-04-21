const express = require('express')
const fs = require('fs');

var product_data
var category_list
fs.readFile(__dirname + '/product.json', 'utf-8', (error, data) => {
    product_data = JSON.parse(data)
})
fs.readFile(__dirname + '/category.json', 'utf-8', (error, data) => {
    category_list = JSON.parse(data)
})
var route = express.Router()

route.get('/productData', function (req, res) {
    res.send({
        status: true,
        data: product_data
    })
})

route.get('/productData/:name', function (req, res) {
    var matchDataList = product_data.filter((item) => item.name == req.params.name)
    if (matchDataList.length != 0) {
        res.send({
            status: true,
            data: matchDataList
        })
    } else {
        res.send({
            statusText: 'data not found'
        })
    }
})

route.post('/productData', function (req, res) {
    if (req.body) {
        var addProductData = req.body
        addProductData.id = Math.floor(Math.random() * 1000)
        product_data.unshift(addProductData)
        fs.writeFile('./product.json', JSON.stringify(product_data), 'utf-8', (error) => {
            if (error) {
                res.send({
                    statusText: 'add fail'
                })
            } else {
                res.send({
                    status: true,
                })
            }
        })
    }
})

route.delete('/productData/:id', function (req, res) {
    var notDeleteDataList = product_data.filter((item) => item.id != req.params.id)
    if (notDeleteDataList.length == product_data.length) {
        res.send({
            statusText: 'product not found'
        })
    } else {
        product_data = notDeleteDataList
        fs.writeFile('./product.json', JSON.stringify(notDeleteDataList), 'utf-8', (error) => {
            if (error) {
                res.send({
                    statusText: 'delete fail'
                })
            } else {
                res.send({
                    status: true,
                })
            }
        })
    }
})

route.post('/productData/:id', function (req, res) {
    if (req.body) {
        var [modifiedData] = product_data.filter((item) => item.id == req.params.id)
        if (modifiedData) {
            Object.assign(modifiedData, req.body)
            for (let index = 0; index < product_data.length; index++) {
                if (product_data[index].id == modifiedData.id) {
                    product_data[index] = modifiedData
                    fs.writeFile('./product.json', JSON.stringify(product_data), 'utf-8', (error) => {
                        if (error) {
                            res.send({
                                statusText: 'modified fail'
                            })
                        } else {
                            res.send({
                                status: true,
                            })
                        }
                    })
                    break
                }
            }
        } else {
            res.send({
                statusText: 'product not found'
            })
        }
    }
})

route.get('/category', function (req, res) {
    res.send({
        status: true,
        data: category_list
    })
})

route.post('/category', function (req, res) {
    if (req.body) {
        category_list = req.body
        fs.writeFile('./category.json', JSON.stringify(category_list), 'utf-8', (error) => {
            if (error) {
                res.send({
                    statusText: 'modified fail'
                })
            } else {
                res.send({
                    status: true,
                })
            }
        })
    }
})


module.exports = route