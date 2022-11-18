require('dotenv').config()

const express = require('express')
const jsonBodyParser = require('./utils/jsonBodyParser')
const authPost = require('./handlers/authPost')
const registerPost = require('./handlers/registerPost')
// const searchGet = require('./handlers/searchGet')
const returnUserGet = require('./handlers/returnUserGet')
const returnPostsGet = require('./handlers/returnPostsGet')
const cors = require('./utils/cors')
const newPostPost = require('./handlers/newPostPost')
const deletePostPost = require('./handlers/deletePostPost')

const api = express()

api.use(cors)

api.post('/login', jsonBodyParser, authPost)

api.post('/register', jsonBodyParser, registerPost)

// api.get('/search', searchGet)

api.get('/user/:userId', returnUserGet)

api.post('/newPost', jsonBodyParser, newPostPost)

api.get('/posts', returnPostsGet)

api.post('/deletePost',jsonBodyParser, deletePostPost)

const { PORT } = process.env
api.listen(PORT, ()=> console.log(`server running on port: ${PORT}`))