require('dotenv').config()

const express = require('express')
const jsonBodyParser = require('./utils/jsonBodyParser')
const authPost = require('./handlers/authPost')
const registerPost = require('./handlers/registerPost')
const searchUsersGet = require('./handlers/searchUsersGet')
const returnUserGet = require('./handlers/returnUserGet')
const returnPostsGet = require('./handlers/returnPostsGet')
const cors = require('./utils/cors')
const newPostPost = require('./handlers/newPostPost')
const deletePostPost = require('./handlers/deletePostPost')
const returnPostsPerfilGet = require('./handlers/returnPostsPerfilGet')
const retrieveUserPerfilGet = require('./handlers/retrieveUserPerfilGet')

const api = express()

api.use(cors)
api.get('/search/users', searchUsersGet)

api.get('/searched/user/:searchedUserId', retrieveUserPerfilGet)

api.post('/user', jsonBodyParser, registerPost)
api.post('/user/authenticate', jsonBodyParser, authPost)
api.get('/user/retrieve', returnUserGet)

api.post('/post', jsonBodyParser, newPostPost)
api.post('/post/delete',jsonBodyParser, deletePostPost)
api.get('/post/retrieve', returnPostsGet)
api.get('/post/retrieve/perfil', returnPostsPerfilGet)

const { PORT } = process.env
api.listen(PORT, ()=> console.log(`server running on port: ${PORT}`))