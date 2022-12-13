require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')

const authenticateUserHandler = require('./handlers/authenticateUserHandler')
const registerUserHandler = require('./handlers/registerUserHandler')
const retrieveUserHandler = require('./handlers/retrieveUserHandler')
const createGameHandler = require('./handlers/createGameHandler')
const randomPickHandler = require('./handlers/randomPickHandler')
const atack1Handler = require('./handlers/atack1Handler')
const retrieveGameIdHandler = require('./handlers/retrieveGameIdHandler')
const retrieveGameDataHandler = require('./handlers/retrieveGameDataHandler')
const changeTurnHandler = require('./handlers/changeTurnHandler')   

const jsonBodyParser = require('./utils/jsonBodyParser')
const cors = require('./utils/cors')
const jwtVerifier = require('./utils/jwtVerifier')

const { MONGODB_URL } = process.env

mongoose.connect(MONGODB_URL)
    .then(() => {

        console.log(`db connected to ${MONGODB_URL}`)

        const api = express()

        api.use(cors)

        api.post('/users/auth', jsonBodyParser, authenticateUserHandler)
        api.post('/users', jsonBodyParser, registerUserHandler)
        api.get('/users', jwtVerifier, retrieveUserHandler)
        api.get('/matchMaking/users/:user',jwtVerifier, createGameHandler)
        api.post('/games/:userId/:gameId', jwtVerifier, jsonBodyParser, randomPickHandler)
        api.get('/Battle/atack1', jwtVerifier, atack1Handler )
        api.get('/retrieveGameId', jwtVerifier, retrieveGameIdHandler)
        api.post('/GameData', jwtVerifier, jsonBodyParser, retrieveGameDataHandler)
        api.get('/ChangeTurn', jwtVerifier, changeTurnHandler)

        const { PORT } = process.env

        api.listen(PORT, () => console.log(`server listening on port ${PORT}`))
    })
    .catch(error => console.error(error))