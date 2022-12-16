require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')

const authenticateUserHandler = require('./handlers/authenticateUserHandler')
const registerUserHandler = require('./handlers/registerUserHandler')
const retrieveUserHandler = require('./handlers/retrieveUserHandler')
const updateUserEmailHandler = require('./handlers/updateUserEmailHandler')
const updateUserPasswordHandler = require('./handlers/updateUserPasswordHandler')
const createListHandler = require ('./handlers/createListHandler')
const createItemHandler = require ('./handlers/createItemHandler')
const retrieveListsHandler = require ('./handlers/retrieveListsHandler')
const retrieveListHandler = require ('./handlers/retrieveListHandler')
const deletelistHandler = require ('./handlers/deletelistHandler')
const retrieveItemsHandler = require ('./handlers/retrieveItemsHandler')
const deleteItemHandler = require ('./handlers/deleteItemHandler')
const updateStatusHandler = require ('./handlers/updateStatusHandler')

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
        
        api.post('/lists', jwtVerifier, jsonBodyParser, createListHandler)
        api.get('/lists', jwtVerifier, retrieveListsHandler)
        api.get('/lists/:listId', jwtVerifier, retrieveListHandler)
        api.get('/lists/:listId/items', jwtVerifier, retrieveItemsHandler)
        api.post('/lists/:listId/items', jsonBodyParser, createItemHandler)
        api.patch('/items/:itemId/:itemStatus', updateStatusHandler)
        
        api.patch('/users/email', jwtVerifier, jsonBodyParser, updateUserEmailHandler)
        api.patch('/users/password', jwtVerifier, jsonBodyParser, updateUserPasswordHandler)
        
        api.delete('/lists/:listId', jwtVerifier, deletelistHandler)
        api.delete('/items/:itemId', deleteItemHandler)

        const { PORT } = process.env

        api.listen(PORT, () => console.log(`server listening on port ${PORT}`))
    })
    .catch(error => console.error(error))