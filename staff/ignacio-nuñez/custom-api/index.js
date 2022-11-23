require('dotenv').config()

const express = require('express')
const jsonBodyParser = require('./utils/jsonBodyParser')
const cors = require('./utils/cors')
const editPost = require('./handlers/editPost')
const usersSearch = require('./handlers/usersSearch')
const postsSearchedUserRetrieve = require('./handlers/postsSearchedUserRetrieve')
const userRegister = require('./handlers/userRegister')
const userAuthenticate = require('./handlers/userAuthenticate')
const userGet = require('./handlers/userGet')
const createPost = require('./handlers/createPost')
const deletePost = require('./handlers/deletePost')
const postsAllowedRetrieve = require('./handlers/postsAllowedRetrieve')
const postsUserRetrieve = require('./handlers/postsUserRetrieve')
const userPostRetrieve = require('./handlers/userPostRetrieve')
const userSearchGet = require('./handlers/userSearchGet')

const api = express()

api.use(cors)
api.get('/search/users', usersSearch)
api.get('/search/users/:searchUserId', userSearchGet)
api.get('/search/posts/:searchedUserId', postsSearchedUserRetrieve)

api.post('/user', jsonBodyParser, userRegister)
api.post('/user/authenticate', jsonBodyParser, userAuthenticate)
api.get('/user/retrieve', userGet)
api.get('/user/posts/:postId', userPostRetrieve)

api.post('/posts', jsonBodyParser, createPost)
api.delete('/posts/:postId', deletePost)
api.patch('/posts/:postId', jsonBodyParser, editPost)
api.get('/posts/retrieve', postsAllowedRetrieve)
api.get('/posts/retrieve/perfil', postsUserRetrieve)

const { PORT } = process.env
api.listen(PORT, ()=> console.log(`server running on port: ${PORT}`))