require('dotenv').config()

const express = require('express')

const authenticateUserHandler = require('./handlers/authenticateUserHandler')
const registerUserHandler = require('./handlers/registerUserHandler')
const searchHttpCatsHandler = require('./handlers/searchHttpCatsHandler')
const retrieveUserHandler = require('./handlers/retrieveUserHandler')
const createPostHandler = require('./handlers/createPostHandler')

const jsonBodyParser = require('./utils/jsonBodyParser')
const cors = require('./utils/cors')

const api = express()

api.use(cors)

api.post('/users/auth', jsonBodyParser, authenticateUserHandler)
api.post('/users', jsonBodyParser, registerUserHandler)
api.get('/users', retrieveUserHandler)

api.post('/posts', jsonBodyParser, createPostHandler)

api.get('/search', searchHttpCatsHandler)



const { PORT } = process.env

api.listen(PORT, () => console.log(`server listening on port ${PORT}`))