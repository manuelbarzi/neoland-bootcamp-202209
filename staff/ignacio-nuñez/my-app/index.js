require('dotenv').config()

const express = require('express')
const formBodyParser = require('./utils/formBodyParser')
const homeGet = require('./handlers/homeGet')
const loginGet = require('./handlers/loginGet')
const loginPost = require('./handlers/loginPost')
const logoutPost = require('./handlers/logoutPost')
const registerGet = require('./handlers/registerGet')
const registerPost = require('./handlers/registerPost')
const searchGet = require('./handlers/searchGet')

const app = express()

app.use(express.static('public'))

app.get('/login', loginGet)
app.post('/login', formBodyParser, loginPost)

app.get('/', homeGet)

app.post('/logout', logoutPost)

app.get('/register', registerGet)
app.post('/register', formBodyParser, registerPost)

app.get('/search', searchGet)

const { PORT } = process.env
app.listen(PORT, ()=> console.log(`server running on port: ${PORT}`))