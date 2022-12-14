require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')

const registerUserHandler = require('./handlers/registerUserHandler')
const authenticateUserHandler = require('./handlers/authenticateUserHandler')
const retrieveUserHandler = require('./handlers/retrieveUserHandler')
const createOfferHandler = require('./handlers/createOfferHandler')
const retrieveUserOffersHandler = require('./handlers/retrieveUserOffersHandler')
const deleteOfferHandler = require('./handlers/deleteOfferHandler')
const updateOfferHandler = require('./handlers/updateOfferHandler')
const retrieveOfferDetailHandler = require('./handlers/retrieveOfferDetailHandler')
const retrievePublishedOffersHandler = require('./handlers/retrievePublishedOffersHandler')
const createCurriculumHandler = require('./handlers/createCurriculumHandler')
const deleteCurriculumHandler = require('./handlers/deleteCurriculumHandler')
const retrieveUserCurriculumsHandler = require('./handlers/retrieveUserCurriculumsHandler')
const retrieveCurriculumDetailHandler = require('./handlers/retrieveCurriculumDetailHandler')
const updateCurriculumHandler = require('./handlers/updateCurriculumHandler')
const retrievePublishedCurriculmsHandler = require('./handlers/retrievePublishedCurriculmsHandler')

const jsonBodyParser = require('./utils/jsonBodyParser')
const cors = require('./utils/cors')
const jwtVerifier = require('./utils/jwtVerifier')
const { MONGODB_URL } = process.env

mongoose.connect(MONGODB_URL)
    .then(() => {
        console.log(`db connected to ${MONGODB_URL}`)

        const api = express()

        api.use(cors)
        api.post('/users', jsonBodyParser, registerUserHandler)
        api.post('/users/auth', jsonBodyParser, authenticateUserHandler)
        api.get('/users',jwtVerifier, retrieveUserHandler)
        api.get('/users/offers', jwtVerifier, retrieveUserOffersHandler)
        api.get('/users/curriculums', jwtVerifier, retrieveUserCurriculumsHandler)

        api.get('/curriculums', jwtVerifier, retrievePublishedCurriculmsHandler)
        api.post('/curriculums', jwtVerifier, createCurriculumHandler)
        api.delete('/curriculums/:curriculumId', jwtVerifier, deleteCurriculumHandler)
        api.get('/curriculums/:curriculumId', jwtVerifier, retrieveCurriculumDetailHandler)
        api.patch('/curriculums/:curriculumId', jwtVerifier, jsonBodyParser, updateCurriculumHandler)
        
        api.get('/offers', jwtVerifier, retrievePublishedOffersHandler)
        api.post('/offers', jwtVerifier, createOfferHandler)
        api.delete('/offers/:offerId', jwtVerifier, deleteOfferHandler)
        api.patch('/offers/:offerId', jwtVerifier, jsonBodyParser, updateOfferHandler)
        api.get('/offers/:offerId', jwtVerifier, retrieveOfferDetailHandler)

        const { PORT } = process.env
        api.listen(PORT, () => console.log(`server running on port: ${PORT}`))
    })
    .catch(error => console.log(error))