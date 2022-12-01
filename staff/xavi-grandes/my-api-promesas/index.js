require('dotenv').config()

const { MongoClient } = require('mongodb')
const express = require('express')

const authenticateUserHandler = require('./handlers/authenticateUserHandler')
const registerUserHandler = require('./handlers/registerUserHandler')
const retrieveUserHandler = require('./handlers/retrieveUserHandler')
const createPostHandler = require('./handlers/createPostHandler')
const retrievePublicPostsHandler = require('./handlers/retrievePublicPostsHandler')
const retrievePostHandler = require('./handlers/retrievePostHandler')
const updatePostHandler = require('./handlers/updatePostHandler')
const deletePostHandler = require('./handlers/deletePostHandler')
const retrievePostsFromUserHandler = require('./handlers/retrievePostsFromUserHandler')
const retrieveAUserHandler = require('./handlers/retrieveAUserHandler')
const retrievePostsHandler = require('./handlers/retrievePostsHandler')

const jsonBodyParser = require('./utils/jsonBodyParser')
const cors = require('./utils/cors')
const context = require('./logic/context')

const { MONGODB_URL } = process.env

const client = new MongoClient(MONGODB_URL)

client.connect()
    .then(connection => {
        console.log(`db connected to ${MONGODB_URL}`)

        context.db = connection.db('test')

        const api = express()

        api.use(cors)

        api.post('/users/auth', jsonBodyParser, authenticateUserHandler)
        api.post('/users', jsonBodyParser, registerUserHandler)
        api.get('/users', retrieveUserHandler)
        api.get('/users/:targetUserId', retrieveAUserHandler)

        api.get('/users/:targetUserId/posts', retrievePostsFromUserHandler)
        
        api.post('/posts', jsonBodyParser, createPostHandler)
        api.get('/posts/public', retrievePublicPostsHandler)
        api.get('/posts/:postId', retrievePostHandler)
        api.patch('/posts/:postId', jsonBodyParser, updatePostHandler)
        api.delete('/posts/:postId', deletePostHandler)
        api.get('/posts', retrievePostsHandler)

        const { PORT } = process.env

        api.listen(PORT, () => console.log(`server listening on port ${PORT}`))
    })
    .catch(error => console.error(error))
