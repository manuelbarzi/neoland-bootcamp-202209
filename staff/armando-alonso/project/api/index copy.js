require('dotenv').config()


const express = require('express')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
const cors = require('cors')

const validateUserHandler = require('./handlers/validateUserHandler')
const registerUserHandler = require('./handlers/registerUserHandler')
const createNewsHandler = require('./handlers/createNewsHandler')
// const retrieveUserHandler = require('./handlers/retrieveUserHandler')

const jsonBodyParser = require('./utils/jsonBodyParser')
// const jwtVerifier = require('./utils/jwtVerifier')

const { MONGODB_URL } = process.env

mongoose.connect(MONGODB_URL)
    .then(() => {
        console.log(`db connected to ${MONGODB_URL}`)
        // context.db=mongoose.connection

        const api = express()

        

        // api.use(bodyParser.urlencoded({extended: false}))

        // api.use(bodyParser.json())

        api.use(cors())

        api.post('/users/validate', jsonBodyParser, validateUserHandler)
        api.post('/users', jsonBodyParser, registerUserHandler)
        // api.get('/users', jwtVerifier, retrieveUserHandler)

        api.post('/news', jsonBodyParser, createNewsHandler)
        
        const { PORT } = process.env

        api.listen(PORT, () => console.log(`server listening on port ${PORT}`))
    })
    .catch(error => console.error(error))