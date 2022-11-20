require('dotenv').config()

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const authenticateUserMiddleware = require('./middleware/authenticateUser')

const authPost = require('./handlers/authPost')
const registerPost = require('./handlers/registerPost')
const createnewPost = require('./handlers/createnewPost')
const getPosts = require('./handlers/getPosts')


const app = express()
app.use(cors())
app.use(bodyParser.json())


app.post('/auth', authPost)
app.post('/register', registerPost)
app.post('/posts', createnewPost)

app.get('/posts', authenticateUserMiddleware, getPosts)

//app.get('/search', searchGet)




const { PORT } = process.env
app.listen(PORT, () => console.log(`server listening on port ${PORT}`))

