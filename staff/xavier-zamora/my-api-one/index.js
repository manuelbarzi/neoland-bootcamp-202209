require('dotenv').config()

const express = require('express')

const authenticateUserHandler = require('./handlers/authenticateUserHandler')
const registerUserHandler = require('./handlers/registerUserHandler')
const retrieveUserHandler = require('./handlers/retrieveUserHandler')

const jsonBodyParser = require('./utils/jsonBodyParser')
const cors = require('./utils/cors')

const api = express()

api.use(cors)

api.post('/users/auth', jsonBodyParser, authenticateUserHandler)
api.post('/users', jsonBodyParser, registerUserHandler)

api.get('/users', jsonBodyParser, retrieveUserHandler)

const { PORT } = process.env

api.listen(PORT, () => console.log(`server listening on port ${PORT}`))