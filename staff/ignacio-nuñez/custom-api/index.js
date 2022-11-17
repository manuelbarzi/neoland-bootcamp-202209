require('dotenv').config()

const express = require('express')
const jsonBodyParser = require('./utils/jsonBodyParser')
const authPost = require('./handlers/authPost')
const registerPost = require('./handlers/registerPost')
// const searchGet = require('./handlers/searchGet')
const returnUserPost = require('./handlers/returnUserPost')
const returnPostsGet = require('./handlers/returnPostsGet')
const cors = require('./utils/cors')
const newPostPost = require('./handlers/newPostPost')

const api = express()

api.use(cors)

api.post('/login', jsonBodyParser, authPost)

api.post('/register', jsonBodyParser, registerPost)

// api.get('/search', searchGet)

api.post('/user', jsonBodyParser, returnUserPost)

api.post('/newPost', jsonBodyParser, newPostPost)

api.get('/posts', returnPostsGet)

const { PORT } = process.env
api.listen(PORT, ()=> console.log(`server running on port: ${PORT}`))