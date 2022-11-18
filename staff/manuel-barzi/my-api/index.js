require('dotenv').config()

const express = require('express')

const authenticateUserHandler = require('./handlers/authenticateUserHandler')
const registerUserHandler = require('./handlers/registerUserHandler')
const searchHttpCatsHandler = require('./handlers/searchHttpCatsHandler')
const retrieveUserHandler = require('./handlers/retrieveUserHandler')

const jsonBodyParser = require('./utils/jsonBodyParser')
const cors = require('./utils/cors')

const api = express()

api.use(cors)

api.post('/auth', jsonBodyParser, authenticateUserHandler)

api.post('/register', jsonBodyParser, registerUserHandler)

api.get('/search', searchHttpCatsHandler)

api.get('/users/:userId', retrieveUserHandler)

const { PORT } = process.env

api.listen(PORT, () => console.log(`server listening on port ${PORT}`))