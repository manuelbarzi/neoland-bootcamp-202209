require('dotenv').config()

const express = require('express')

const {
    handlerRegister,
    searchGet,
    handlerAuth,
    handlerRetrieveUser,
    handlerUpdateUserName,
    handlerUpdateUserEmail,
    handlerUpdateUserPassword,
} = require("./handlers")

const jsonBodyParser = require('./utils/jsonBodyParser')
const cors = require('./utils/cors')

const api = express()
api.use(cors)

api.post('/users/auth', jsonBodyParser, handlerAuth)
api.post('/users', jsonBodyParser, handlerRegister)
// 3. Recibimos la información de Register (React) y la pasamos a su handler en la API

api.get('/users', handlerRetrieveUser)
api.post('/users/updateUserName', jsonBodyParser, handlerUpdateUserName)
api.post('/users/updateUserEmail', jsonBodyParser, handlerUpdateUserEmail)
api.post('/users/updateUserPassword', jsonBodyParser, handlerUpdateUserPassword)
api.get('/search', searchGet)

const { PORT } = process.env

api.listen(PORT, () => console.log(`server listening on port ${PORT}`))