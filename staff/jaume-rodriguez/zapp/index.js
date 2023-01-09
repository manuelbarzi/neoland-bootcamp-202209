require('dotenv').config()

const express = require('express')

const {
    loginGet,
    loginPost,
    homeGet,
    registerGet,
    registerPost,
    searchGet,
    logoutPost,
} = require("./handlers")

const bodyParser = require("body-parser");
const formBodyParser = bodyParser.urlencoded({ extended: false });

const app = express()
app.use(express.static('public'))

app.get('/login', loginGet)
app.post("/login", formBodyParser, loginPost);

app.get('/', homeGet)

app.post('/logout', logoutPost)

app.get('/register', registerGet)
app.post('/register', formBodyParser, registerPost)

app.get('/search', searchGet)

const { PORT } = process.env
app.listen(PORT, () => console.log(`server listening on port ${PORT}`))