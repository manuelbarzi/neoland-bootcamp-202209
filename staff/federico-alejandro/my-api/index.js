require('dotenv').config() 

const express = require('express')

const authPost = require('./handlers/authPost')
const registerPost = require('./handlers/registerPost')
const searchGet = require('./handlers/searchGet')

const jsonBodyParser = require('./utils/jsonBodyParser')

const api = express()
// jsonBodyParser transforma en objeto el json para luego enviarlo a la otra pagina.
api.post('/auth', jsonBodyParser, authPost) 

api.post('/register', jsonBodyParser, registerPost)

api.get('/search', searchGet)

const { PORT } = process.env

api.listen(PORT, () => console.log(`server listening on port ${PORT}`))