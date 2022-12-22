require('dotenv').config()

const { MongoClient } = require('mongodb')
const express = require('express')
const cors = require('cors')

/* IMPORTACIONES DE LOS DIFERENTES CONTROLADORES */

const validateUserHandler = require('./handlers/validateUserHandler')
const registerUserHandler = require('./handlers/registerUserHandler')
const getUserSession = require('./handlers/getUserSession')
const createPost = require('./handlers/createPost')
const getPublicPosts = require('./handlers/getPublicPosts')
const getPublicSanidadPosts = require('./handlers/getPublicSanidadPosts')
const getOnePost = require('./handlers/getOnePost')
const updatePost = require('./handlers/updatePost')
const deletePost = require('./handlers/deletePost')
const getUserPosts = require('./handlers/getUserPosts')
const getAUser = require('./handlers/getAUser')
const getSessionPosts = require('./handlers/getSessionPosts')
const getOpenPosts = require('./handlers/getOpenPosts')
const getOpenSanidadPosts = require('./handlers/getOpenSanidadPosts')
const getOpenObrasPosts = require('./handlers/getOpenObrasPosts')
const getOpenEmpleoPosts = require('./handlers/getOpenEmpleoPosts')
const getOpenHaciendaPosts = require('./handlers/getOpenHaciendaPosts')
const getOpenCulturaPosts = require('./handlers/getOpenCulturaPosts')
const getOpenDeportesPosts = require('./handlers/getOpenDeportesPosts')
const getOpenOnePost = require('./handlers/getOpenOnePost')
const getClosedCulturaPosts = require('./handlers/getClosedCulturaPosts')
const getClosedSanidadPosts = require('./handlers/getClosedSanidadPosts')
const getClosedHaciendaPosts = require('./handlers/getClosedHaciendaPosts')
const getClosedObrasPosts = require('./handlers/getClosedObrasPosts')
const getClosedEmpleoPosts = require('./handlers/getClosedEmpleoPosts')
const getClosedDeportesPosts = require('./handlers/getClosedDeportesPosts')


const jsonBodyParser = require('./utils/jsonBodyParser')
const context = require('./logic/context')

const { MONGODB_URL } = process.env

const client = new MongoClient(MONGODB_URL)

client.connect()
    .then(connection => {
        console.log(`db connected to ${MONGODB_URL}`)

        context.db = connection.db('project')

        const api = express()

        api.use(cors())

        api.post('/users/validate', jsonBodyParser, validateUserHandler)
        api.post('/users', jsonBodyParser, registerUserHandler)
        api.get('/users', getUserSession)
        // api.get('/users/posts', getSessionPosts)
        api.get('/users/:targetUserId', getAUser)
        api.get('/users/:targetUserId/posts', getUserPosts)
        

        
        api.get('/open/posts/public', getOpenPosts)
        api.get('/open/posts/sanidad', getOpenSanidadPosts)
        api.get('/open/posts/obras', getOpenObrasPosts)
        api.get('/open/posts/empleo', getOpenEmpleoPosts)
        api.get('/open/posts/hacienda', getOpenHaciendaPosts)
        api.get('/open/posts/cultura', getOpenCulturaPosts)
        api.get('/open/posts/deportes', getOpenDeportesPosts)
        api.get('/open/posts/one/:postId', getOpenOnePost)


        api.get('/closed/posts/cultura', getClosedCulturaPosts)
        api.get('/closed/posts/sanidad', getClosedSanidadPosts)
        api.get('/closed/posts/hacienda', getClosedHaciendaPosts)
        api.get('/closed/posts/obras', getClosedObrasPosts)
        api.get('/closed/posts/empleo', getClosedEmpleoPosts)
        api.get('/closed/posts/deportes', getClosedDeportesPosts)


        api.post('/post', jsonBodyParser, createPost)
        api.get('/posts/session', getSessionPosts)
        api.get('/posts/public', getPublicPosts)
        api.get('/posts/sanidad', getPublicSanidadPosts)
        api.get('/posts/:postId', getOnePost)
        api.patch('/posts/:postId', jsonBodyParser, updatePost)
        api.delete('/posts/:postId', deletePost)
        


        const { PORT } = process.env

        api.listen(PORT, () => console.log(`server listening on port ${PORT}`))
})

.catch(error => console.error(error))


