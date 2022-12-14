require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')

const authenticateUserHandler = require('./handlers/authenticateUserHandler')
const registerUserHandler = require('./handlers/registerUserHandler')
const retrieveUserHandler = require('./handlers/retrieveUserHandler')
const updateUserEmailHandler = require('./handlers/updateUserEmailHandler')
const updateUserPasswordHandler = require('./handlers/updateUserPasswordHandler')
const createListHandler = require ('./handlers/createListHandler')
const createProductHandler = require ('./handlers/createProductHandler')
const retrieveListsHandler = require ('./handlers/retrieveListsHandler')
const retrieveListHandler = require ('./handlers/retrieveListHandler')
const deletelistHandler = require ('./handlers/deletelistHandler')

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
        api.post('/users/list', jwtVerifier, jsonBodyParser, createListHandler)
        api.post('/product/:listId', jsonBodyParser, createProductHandler)
        
        api.get('/users/lists', jwtVerifier, retrieveListsHandler)
        api.get('/users/list', jwtVerifier, jsonBodyParser, retrieveListHandler)
        api.get('/users', jwtVerifier, retrieveUserHandler)
        
        api.patch('/users/email', jwtVerifier, jsonBodyParser, updateUserEmailHandler)
        api.patch('/users/password', jwtVerifier, jsonBodyParser, updateUserPasswordHandler)
        
        api.delete('/lists/:listId', jwtVerifier, deletelistHandler)

        const { PORT } = process.env

        api.listen(PORT, () => console.log(`server listening on port ${PORT}`))
    })
    .catch(error => console.error(error))