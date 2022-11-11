const express = require('express')
const static = require('./static')

const server = express()

server.use(static('public'))

server.listen(80) // http