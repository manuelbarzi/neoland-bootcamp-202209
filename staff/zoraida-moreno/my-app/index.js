const express = require('express')


const loginGet = require('./handlers/loginGet')
const loginPost = require('./handlers/loginPost')
const homeGet = require('./handlers/homeGet')
const logoutPost = require('./handlers/logoutPost')
const registerGet = require('./handlers/registerGet')
const registerPost = require('./handlers/registerPost')
const searchGet = require('./handlers/searchGet')
const formBodyParser = require('./utils/formBodyParse')



const app = express()

app.use(express.static('public'))

app.get('/login', loginGet)
app.post('/login', formBodyParser, loginPost)

app.get('/', homeGet)

app.post('/logout', logoutPost)

app.get('/register', registerGet)
app.post('/register', formBodyParser, registerPost)

// http://localhost/search?q=C
app.get('/search', searchGet)




app.listen(80)