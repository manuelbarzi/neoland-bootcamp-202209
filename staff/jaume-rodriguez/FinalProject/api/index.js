require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')

const {
    handlerRegister,
    handlerAuth,
    handlerRetrieveUser,
    handlerRetrieveUsers,
    handlerUpdateUserName,
    handlerUpdateUserEmail,
    handlerUpdateUserPassword,
    handlerRetrieveAUser,

    handlerCreatePost,
    handlerRetrievePublicPosts,
    handlerRetrievePost,
    handlerDeletePost,
    handlerUpdatePost,
    handlerRetrievePostsFromUser,

    handlerCreateQuest,
    handlerRetrieveQuest,
    handlerRetrieveQuests,
    handlerRetrieveMainQuests,
    handlerRetrieveMainRandomQuest,
    handlerDeleteQuest,
    handlerUpdateQuest,
    handlerPlayQuest,

    handlerCreateAdventure,
    handlerCreateAdventureStep,
    handlerRetrieveAdventure,
    handlerRetrieveAdventures,
    handlerRetrieveMyAdventures,
    handlerRetrieveMainAdventures,
    handlerRetrieveWorldAdventures,
    handlerUpdateAdventure,
    handlerDeleteAdventure,
    handlerDeleteAdventureStep,
    handlerPlayAdventure,
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

        api.get('/user', jwtVerifier, handlerRetrieveUser)
        api.get('/users/', jwtVerifier, handlerRetrieveUsers)
        api.get('/users/:targetUserId', jwtVerifier, handlerRetrieveAUser)
        api.patch('/users/updateUserName', jwtVerifier, jsonBodyParser, handlerUpdateUserName)
        api.patch('/users/updateUserEmail', jwtVerifier, jsonBodyParser, handlerUpdateUserEmail)
        api.patch('/users/updateUserPassword', jwtVerifier, jsonBodyParser, handlerUpdateUserPassword)

        api.post('/posts', jwtVerifier, jsonBodyParser, handlerCreatePost)
        api.get('/posts/public', jwtVerifier, handlerRetrievePublicPosts)
        api.get('/users/:targetUserId/posts', jwtVerifier, handlerRetrievePostsFromUser)
        api.get('/posts/:postId', jwtVerifier, handlerRetrievePost)
        api.patch('/posts/:postId', jwtVerifier, jsonBodyParser, handlerUpdatePost)
        api.delete('/posts/:postId', jwtVerifier, handlerDeletePost)

        api.post('/quest', jwtVerifier, jsonBodyParser, handlerCreateQuest)
        api.get('/quest/', jwtVerifier, handlerRetrieveQuests)
        api.get('/quest/main/', jwtVerifier, handlerRetrieveMainQuests)
        api.get('/quest/main/random', jwtVerifier, handlerRetrieveMainRandomQuest)
        api.get('/quest/:questId', jwtVerifier, handlerRetrieveQuest)
        api.patch('/quest/:questId', jwtVerifier, jsonBodyParser, handlerUpdateQuest)
        api.delete('/quest/:questId', jwtVerifier, handlerDeleteQuest)
        api.put('/quest/:questId/play', jwtVerifier, handlerPlayQuest)

        api.post('/adventure', jwtVerifier, jsonBodyParser, handlerCreateAdventure)
        api.post('/adventure/:adventureId/step', jwtVerifier, jsonBodyParser, handlerCreateAdventureStep)
        api.get('/adventure/', jwtVerifier, handlerRetrieveAdventures)
        api.get('/my/adventure/', jwtVerifier, handlerRetrieveMyAdventures)
        api.get('/adventure/main', jwtVerifier, handlerRetrieveMainAdventures)
        api.get('/adventure/world', jwtVerifier, handlerRetrieveWorldAdventures)
        api.get('/adventure/:adventureId', jwtVerifier, handlerRetrieveAdventure)
        api.patch('/adventure/:adventureId', jwtVerifier, jsonBodyParser, handlerUpdateAdventure)
        api.delete('/adventure/:adventureId', jwtVerifier, handlerDeleteAdventure)
        //TODO:api.patch('/adventure/:adventureId/step/:stepId', jwtVerifier, jsonBodyParser, handlerUpdateAdventureStep)
        api.delete('/adventure/:adventureId/step/:questId', jwtVerifier, handlerDeleteAdventureStep)
        api.put('/adventure/:adventureId/play', jwtVerifier, handlerPlayAdventure)


        const { PORT } = process.env

        api.listen(PORT, () => console.log(`server listening on port ${PORT}`))
    })
    .catch(error => console.error(error))