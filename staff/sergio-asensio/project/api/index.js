require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')

const authenticateUserHandler = require('./handlers/authenticateUserHandler')
const registerUserHandler = require('./handlers/registerUserHandler')
const retrieveUserHandler = require('./handlers/retrieveUserHandler')
const createNoticeHandler = require('./handlers/createNoticeHandler')
const updateNoticeHandler = require('./handlers/updateNoticeHandler')

const deleteNoticeHandler = require('./handlers/deleteNoticeHandler')




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
        api.post('/noticias', jwtVerifier, jsonBodyParser, createNoticeHandler)
        api.patch('/noticias/:noticetId', jwtVerifier, updateNoticeHandler)
        api.delete('/noticias/:noticeId', jwtVerifier, deleteNoticeHandler)



        
        const { PORT } = process.env

        api.listen(PORT, () => console.log(`server listening on port ${PORT}`))
    })
    .catch(error => console.error(error))