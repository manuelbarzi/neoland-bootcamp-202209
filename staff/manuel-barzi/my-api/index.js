require('dotenv').config()

const express = require('express')

const authenticateUserHandler = require('./handlers/authenticateUserHandler')
const registerUserHandler = require('./handlers/registerUserHandler')
const searchHttpCatsHandler = require('./handlers/searchHttpCatsHandler')
const retrieveUserHandler = require('./handlers/retrieveUserHandler')
const createPostHandler = require('./handlers/createPostHandler')
const retrievePublicPostsHandler  = require('./handlers/retrievePublicPostsHandler')
const retrievePostHandler = require('./handlers/retrievePostHandler')
const updatePostHandler = require('./handlers/updatePostHandler')

const jsonBodyParser = require('./utils/jsonBodyParser')
const cors = require('./utils/cors')

const api = express()

api.use(cors)

api.post('/users/auth', jsonBodyParser, authenticateUserHandler)
api.post('/users', jsonBodyParser, registerUserHandler)
api.get('/users', retrieveUserHandler)

api.post('/posts', jsonBodyParser, createPostHandler)
api.get('/posts/public', retrievePublicPostsHandler)
api.get('/posts/:postId', retrievePostHandler)
api.patch('/posts/:postId', jsonBodyParser, updatePostHandler)

api.get('/search', searchHttpCatsHandler)



const { PORT } = process.env

api.listen(PORT, () => console.log(`server listening on port ${PORT}`))