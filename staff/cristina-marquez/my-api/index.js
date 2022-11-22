require('dotenv').config()

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const authenticateUserMiddleware = require('./middleware/authenticateUser')

const authUser = require('./handlers/authUser')
const registerPost = require('./handlers/registerPost')
const createnewPost = require('./handlers/createnewPost')
const getPosts = require('./handlers/getPosts')
const updatePost = require('./handlers/updatePost')


const app = express()
app.use(cors())
app.use(bodyParser.json())


app.post('/auth', authUser)
app.post('/register', registerPost)

app.get('/posts', authenticateUserMiddleware, getPosts)
app.post('/posts', createnewPost)
app.patch('/posts/:postId', updatePost)


//app.get('/search', searchGet)




const { PORT } = process.env
app.listen(PORT, () => console.log(`server listening on port ${PORT}`))

