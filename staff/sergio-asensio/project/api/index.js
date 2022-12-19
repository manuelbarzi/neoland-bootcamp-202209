require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')

const authenticateUserHandler = require('./handlers/authenticateUserHandler')
const registerUserHandler = require('./handlers/registerUserHandler')
const retrieveUserHandler = require('./handlers/retrieveUserHandler')
const retrieveUsersHandler = require('./handlers/retrieveUsersHandler')
const updateUserRoleHandler = require('./handlers/updateUserRoleHandler')


const createNoticeHandler = require('./handlers/createNoticeHandler')
const updateNoticeHandler = require('./handlers/updateNoticeHandler')
const deleteNoticeHandler = require('./handlers/deleteNoticeHandler')
const retrieveNoticeHandler = require('./handlers/retrieveNoticeHandler')
const retrieveNoticesHandler = require('./handlers/retrieveNoticesHandler')
const retrieveLastNotice = require('./handlers/retrieveLastNoticeHandler')

const createEventHandler = require('./handlers/createEventHandler')
const updateEventHandler = require('./handlers/updateEventHandler')
const deleteEventHandler = require('./handlers/deleteEventHandler')
const retrieveEventHandler = require('./handlers/retrieveEventHandler')
const retrieveEventByMonthNumberHandler = require('./handlers/retrieveEventByMonthNumberHandler')
const retrieveEventsHandler = require('./handlers/retrieveEventsHandler')
const signUpEventHandler = require('./handlers/signUpEventHandler')

const retrieveUserEventHandler = require('./handlers/retrieveUserEventHandler')

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
        api.get('/users/all', jwtVerifier, retrieveUsersHandler)
        api.patch('/users/:user', jwtVerifier,jsonBodyParser, updateUserRoleHandler)


        api.post('/noticias', jwtVerifier, jsonBodyParser, createNoticeHandler)
        api.patch('/noticias/:noticeId', jwtVerifier,jsonBodyParser, updateNoticeHandler)
        api.get('/noticias/last', jwtVerifier, retrieveLastNotice )
        api.get('/noticias/:noticeId', jwtVerifier, retrieveNoticeHandler)
        api.delete('/noticias/:noticeId', jwtVerifier, deleteNoticeHandler)
        api.get('/noticias', jwtVerifier, retrieveNoticesHandler)

        api.post('/eventos', jwtVerifier, jsonBodyParser, createEventHandler)
        api.get('/eventos/:month', jwtVerifier, retrieveEventByMonthNumberHandler)
        api.get('/eventos/:eventId', jwtVerifier, retrieveEventHandler)
        api.patch('/eventos/:eventId', jwtVerifier,jsonBodyParser, updateEventHandler)
        api.patch('/eventos/inscription/:eventId', jwtVerifier, signUpEventHandler)
        api.delete('/eventos/:eventId', jwtVerifier, deleteEventHandler)
        api.get('/eventos', jwtVerifier, retrieveEventsHandler)

        api.get('/eventos/participantes/:user', jwtVerifier, retrieveUserEventHandler)




        const { PORT } = process.env

        api.listen(PORT, () => console.log(`server listening on port ${PORT}`))
    })
    .catch(error => console.error(error))