require('dotenv').config() 

const express = require('express')

const authenticateUserHandler = require('./handlers/authenticateUserHandler')
const registerUserHandler = require('./handlers/registerUserHandler')
const searchHttpCatsHandler = require('./handlers/searchHttpCatsHandler')
const retrieveUserHandler = require('./handlers/retrieveUserHandler')
const createPostHandler = require('./handlers/createPostHandler')


const jsonBodyParser = require('./utils/jsonBodyParser')
const cors = require('./utils/cors')
const retrievePublicPostsHandler = require('./handlers/retrievePublicPostsHandler')


const api = express()

api.use(cors)
// jsonBodyParser transforma en objeto el json para luego enviarlo a la otra pagina.
api.post('/users/auth', jsonBodyParser, authenticateUserHandler) 
api.post('/users', jsonBodyParser, registerUserHandler)
api.get('/users', retrieveUserHandler)

api.get('/search', searchHttpCatsHandler)

api.post('/posts', jsonBodyParser, createPostHandler)
api.get('/posts', retrievePublicPostsHandler)

const { PORT } = process.env

api.listen(PORT, () => console.log(`server listening on port ${PORT}`))