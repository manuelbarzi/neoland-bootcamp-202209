const express = require('express')

const {
    loginGet,
    loginPost,
    homeGet,
    registerGet,
    registerPost,
    searchGet,
} = require("./handlers")

const bodyParser = require("body-parser");
const formBodyParser = bodyParser.urlencoded({ extended: false });

const app = express()
app.use(express.static('public'))

app.get('/login', loginGet)
app.post("/login", formBodyParser, loginPost);

app.get('/', homeGet)

app.get('/register', registerGet)
app.post('/register', formBodyParser, registerPost)

app.get('/search', searchGet)

app.listen(80)