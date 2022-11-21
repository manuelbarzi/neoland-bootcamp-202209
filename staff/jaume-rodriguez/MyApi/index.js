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
    handlerCreateTask,
    handlerRetrieveTasks,
    handlerDeleteTask,
    handlerUpdateTaskStatus,
    handlerUpdateTaskText,
} = require("./handlers")

const jsonBodyParser = require('./utils/jsonBodyParser')
const cors = require('./utils/cors')

const api = express()
api.use(cors)

api.post('/users/auth', jsonBodyParser, handlerAuth)
api.post('/users', jsonBodyParser, handlerRegister)
// 3. Recibimos la información de Register (React) y la pasamos a su handler en la API

api.get('/users', handlerRetrieveUser)
api.patch('/users/updateUserName', jsonBodyParser, handlerUpdateUserName)
api.patch('/users/updateUserEmail', jsonBodyParser, handlerUpdateUserEmail)
api.patch('/users/updateUserPassword', jsonBodyParser, handlerUpdateUserPassword)

api.post('/tasks', jsonBodyParser, handlerCreateTask)
api.get('/tasks', handlerRetrieveTasks)
api.patch('/tasks', jsonBodyParser, handlerUpdateTaskStatus)
api.patch('/updateTaskText', jsonBodyParser, handlerUpdateTaskText)
api.delete('/tasks', jsonBodyParser, handlerDeleteTask)
api.get('/search', searchGet)

const { PORT } = process.env

api.listen(PORT, () => console.log(`server listening on port ${PORT}`))