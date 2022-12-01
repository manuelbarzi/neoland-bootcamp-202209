require('dotenv').config()

const { MongoClient } = require('mongodb')
const express = require('express')

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

const jsonBodyParser = require('./utils/jsonBodyParser')
const cors = require('./utils/cors')
const context = require('./logic/context')
const jwtVerifier = require('./utils/jwtVerifier')

const { MONGODB_URL } = process.env

const client = new MongoClient(MONGODB_URL)

client.connect()
    .then(connection => {
        console.log(`db connected to ${MONGODB_URL}`)
        context.db = connection.db('test')

        const api = express()

        api.use(cors)
        api.get('/search/users', jwtVerifier, usersSearch)
        api.get('/search/users/:searchUserId',jwtVerifier, userSearchGet)
        api.get('/search/posts/:searchedUserId',jwtVerifier, postsSearchedUserRetrieve)

        api.post('/user', jsonBodyParser, userRegister)
        api.post('/user/authenticate', jsonBodyParser, userAuthenticate)
        api.get('/user/retrieve',jwtVerifier, userGet)
        api.get('/user/posts/:postId',jwtVerifier, userPostRetrieve)

        api.post('/posts',jwtVerifier, jsonBodyParser, createPost)
        api.delete('/posts/:postId',jwtVerifier, deletePost)
        api.patch('/posts/:postId',jwtVerifier, jsonBodyParser, editPost)
        api.get('/posts/perfil',jwtVerifier, postsUserRetrieve)
        api.get('/posts',jwtVerifier, postsAllowedRetrieve)

        const { PORT } = process.env
        api.listen(PORT, () => console.log(`server running on port: ${PORT}`))
    })
    .catch(error => console.log(error))