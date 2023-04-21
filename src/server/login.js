const express = require('express')

var route = express.Router()

const { v4 } = require('uuid')
var uuidToken = (() => {
    uuidToken = v4()
    return uuidToken
})()

const userList = [{
    username: 'laocuibanzhuan',
    password: 'laocuibanzhuan',
    token: '4b2c77e4-34cb-43be-83d9-6070d06fdadb'
}]

route.post('/login', function (req, res) {
    for (let index = 0; index < userList.length; index++) {
        if (req.body.username === userList[index].username) {
            if (req.body.password === userList[index].password) {
                res.send({
                    status: true,
                    token: userList[index].token
                })
            } else {
                res.send({
                    statusText: 'Password error'
                })
            }
            break
        } else {
            res.send({
                statusText: 'user does not exist'
            })
        }
    }
})

module.exports = route