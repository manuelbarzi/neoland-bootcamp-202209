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
// api.get('/search', searchGet)

api.post('/user', jsonBodyParser, registerPost)
api.post('/user/authenticate', jsonBodyParser, authPost)
api.get('/user/retrieve', returnUserGet)

api.post('/post', jsonBodyParser, newPostPost)
api.post('/post/delete',jsonBodyParser, deletePostPost)
api.get('/post/retrieve', returnPostsGet)

const { PORT } = process.env
api.listen(PORT, ()=> console.log(`server running on port: ${PORT}`))