require('dotenv').config()

const express = require('express')
const cors = require('./utils/cors')
const authenticateUserHandler = require('./handlers/authenticateUserHandler')
const registerUserHandler = require('./handlers/registerUserHandler')
const searchHttpCatsHandler = require('./handlers/searchHttpCatsHandler')
const retrieveUserHandler = require('./handlers/retrieveUserHandler')

const jsonBodyParser = require('./utils/jsonBodyParser')
const searchHttpCatsHandler = require('./handlers/searchHttpCatsHandler')

const api = express()

api.use(cors)

api.post('/users/auth', jsonBodyParser, authenticateUserHandler)

api.post('/users', jsonBodyParser, registerUserHandler)

api.get('/users', retrieveUserHandler)

api.get('/search', searchHttpCatsHandler)

api.post('/posts', jsonBodyParser, createPostHandler)

const { PORT } = process.env

api.listen(PORT, () => console.log(`server listening on port ${PORT}`))