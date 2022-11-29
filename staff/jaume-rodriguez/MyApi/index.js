require('dotenv').config()

const { MongoClient } = require('mongodb')
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
const context = require('./logic/context')

const { MONGODB_URL } = process.env


const client = new MongoClient(MONGODB_URL)

client.connect()
    .then(connection => {

        context.db = connection.db('test')
        const api = express()

        api.use(cors)

        api.post('/users/auth', jsonBodyParser, handlerAuth)
        api.post('/users', jsonBodyParser, handlerRegister)

        api.get('/users', handlerRetrieveUser)
        api.patch('/users/updateUserName', jsonBodyParser, handlerUpdateUserName)
        api.patch('/users/updateUserEmail', jsonBodyParser, handlerUpdateUserEmail)
        api.patch('/users/updateUserPassword', jsonBodyParser, handlerUpdateUserPassword)
        api.get('/users/:targetUserId', handlerRetrieveAUser)
        api.get('/users/:targetUserId/posts', handlerRetrievePostsFromUser)

        api.post('/tasks', jsonBodyParser, handlerCreateTask)
        api.get('/tasks', handlerRetrieveTasks)
        api.patch('/tasks/:taskId', jsonBodyParser, handlerUpdateTaskStatus)
        api.patch('/tasks/text/:taskId', jsonBodyParser, handlerUpdateTaskText)
        api.patch('/tasks/title/:taskId', jsonBodyParser, handlerUpdateTaskTitle)
        api.delete('/tasks/:taskId', jsonBodyParser, handlerDeleteTask)
        api.get('/search', searchGet)

        api.post('/posts', jsonBodyParser, handlerCreatePost)
        api.get('/posts/public', handlerRetrievePublicPosts)
        api.get('/posts/:postId', handlerRetrievePost)
        api.patch('/posts/:postId', jsonBodyParser, handlerUpdatePost)
        api.delete('/posts/:postId', handlerDeletePost)


        const { PORT } = process.env

        api.listen(PORT, () => console.log(`server listening on port ${PORT}`))
    })
    .catch(error => console.error(error))