const express = require('express')

var route = express.Router()

const data_simple = {
    sales: 25441,
    today_sales: 255,
    visits: 155,
    today_visits: 55,
    orders: 51515,
    today_orders: 557,
    joined: 78,
    today_join: 4,
    hot_product: 'apple',
    hot_adv: 'adv1'
}

const dataList_sales = [
    {
        name: 'a',
        type: 'bar',
        barGap: 0,
        emphasis: {
            focus: 'series'
        },
        data: [320, 332, 301, 334, 390]
    },
    {
        name: 'b',
        type: 'bar',
        emphasis: {
            focus: 'series'
        },
        data: [220, 182, 191, 234, 290]
    },
    {
        name: 'c',
        type: 'bar',
        emphasis: {
            focus: 'series'
        },
        data: [150, 232, 201, 154, 190]
    },
    {
        name: 'd',
        type: 'bar',
        emphasis: {
            focus: 'series'
        },
        data: [98, 77, 101, 99, 40]
    }
]

const dataList_category = [
    { value: 1048, name: '水果' },
    { value: 735, name: '蔬菜' },
    { value: 580, name: '海鲜' },
    { value: 484, name: '肉类' },
    { value: 300, name: '菇类' }
]

const dataList_orders = [150, 230, 224, 218, 135, 147, 260]


route.get('/salesData/simple', function (req, res) {
    res.send({
        status: true,
        data: data_simple
    })
})
route.get('/salesData/sales', function (req, res) {
    res.send({
        status: true,
        data: dataList_sales
    })
})
route.get('/salesData/category', function (req, res) {
    res.send({
        status: true,
        data: dataList_category
    })
})
route.get('/salesData/orders', function (req, res) {
    res.send({
        status: true,
        data: dataList_orders
    })
})


module.exports = route