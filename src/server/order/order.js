const express = require('express')
const fs = require('fs');

var order_data = []
fs.readFile(__dirname + '/order.json', 'utf-8', (error, data) => {
    order_data = JSON.parse(data)
})
var route = express.Router()

route.get('/orderData', function (req, res) {
    res.send({
        status: true,
        data: order_data
    })
})


module.exports = route