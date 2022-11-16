require('dotenv').config()

const express = require('express')
const cors = require('cors')

const authPost = require('./handlers/authPost')
const registerPost = require('./handlers/registerPost')
const searchGet = require('./handlers/searchGet')

const jsonBodyParser = require('./utils/jsonBodyParser')

const app = express()
app.use(cors())


app.post('/auth', jsonBodyParser, authPost)

app.post('/register', jsonBodyParser, registerPost)

app.get('/search', searchGet)




const { PORT } = process.env
app.listen(PORT, () => console.log(`server listening on port ${PORT}`))