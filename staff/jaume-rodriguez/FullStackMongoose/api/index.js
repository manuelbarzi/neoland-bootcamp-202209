require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')

const {
    handlerRegister,
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
    handlerUpdateTaskTitle,
    handlerCreatePost,
    handlerRetrievePublicPosts,
    handlerRetrievePost,
    handlerDeletePost,
    handlerUpdatePost,
    handlerRetrieveAUser,
    handlerRetrievePostsFromUser,
} = require("./handlers")

const jsonBodyParser = require('./utils/jsonBodyParser')
const cors = require('./utils/cors')
const jwtVerifier = require('./utils/jwtVerifier')

const { MONGODB_URL } = process.env

mongoose.connect(MONGODB_URL)
    .then(() => {
        console.log(`db connected to ${MONGODB_URL}`)

        const api = express()

        api.use(cors)

        api.post('/users/auth', jsonBodyParser, handlerAuth)
        api.post('/users', jsonBodyParser, handlerRegister)

        api.get('/users', jwtVerifier, handlerRetrieveUser)
        api.patch('/users/updateUserName', jwtVerifier, jsonBodyParser, handlerUpdateUserName)
        api.patch('/users/updateUserEmail', jwtVerifier, jsonBodyParser, handlerUpdateUserEmail)
        api.patch('/users/updateUserPassword', jwtVerifier, jsonBodyParser, handlerUpdateUserPassword)
        api.get('/users/:targetUserId', jwtVerifier, handlerRetrieveAUser)
        api.get('/users/:targetUserId/posts', jwtVerifier, handlerRetrievePostsFromUser)

        api.post('/tasks', jwtVerifier, jsonBodyParser, handlerCreateTask)
        api.get('/tasks', jwtVerifier, handlerRetrieveTasks)
        api.patch('/tasks/:taskId', jwtVerifier, jsonBodyParser, handlerUpdateTaskStatus)
        api.patch('/tasks/text/:taskId', jwtVerifier, jsonBodyParser, handlerUpdateTaskText)
        api.patch('/tasks/title/:taskId', jwtVerifier, jsonBodyParser, handlerUpdateTaskTitle)
        api.delete('/tasks/:taskId', jwtVerifier, jsonBodyParser, handlerDeleteTask)

        api.post('/posts', jwtVerifier, jsonBodyParser, handlerCreatePost)
        api.get('/posts/public', jwtVerifier, handlerRetrievePublicPosts)
        api.get('/posts/:postId', jwtVerifier, handlerRetrievePost)
        api.patch('/posts/:postId', jwtVerifier, jsonBodyParser, handlerUpdatePost)
        api.delete('/posts/:postId', jwtVerifier, handlerDeletePost)


        const { PORT } = process.env

        api.listen(PORT, () => console.log(`server listening on port ${PORT}`))
    })
    .catch(error => console.error(error))