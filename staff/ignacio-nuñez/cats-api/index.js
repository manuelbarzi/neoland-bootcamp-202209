require('dotenv').config()

const express = require('express')
const jsonBodyParser = require('./utils/jsonBodyParser')
const authPost = require('./handlers/authPost')
const registerPost = require('./handlers/registerPost')
const searchGet = require('./handlers/searchGet')
const returnUserPost = require('./handlers/returnUserPost')

const api = express()

api.post('/login', jsonBodyParser, authPost)

api.post('/register', jsonBodyParser, registerPost)

api.get('/search', searchGet)

api.post('/', jsonBodyParser, returnUserPost)

const { PORT } = process.env
api.listen(PORT, ()=> console.log(`server running on port: ${PORT}`))