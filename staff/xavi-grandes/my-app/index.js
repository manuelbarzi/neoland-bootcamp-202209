require('dotenv').config()

const express = require ('express')

const loginGet = require('./handlers/loginGet')
const loginPost = require('./handlers/loginPost')
const homeGet = require('./handlers/homeGet')
const logoutPost = requiere('./handlers/logoutPost')
const registerGet = require('./handlers/registerGet')
const registerPost = require ('./handlers/registerPost')
const searchGet = require('./handlers/searchGet')

const formBodyParser = require('./utils/formBodyParser')

const app = express()

// use: todo aquello que está dentro de la función se muestra global, en este caso todo aquello que está dentro de la carpeta /public.
app.use(express.static('public'))

app.get('/login', loginGet)
app.post('/login', loginPost)

app.get('/', homeGet)

// usamos el método POST porque no queremos que navegue a ningún lado
app.post('/logout', logoutPost)

app.get('/register', registerGet)
app.post('/register', formBodyParser, registerPost)

app.get('/search', searchGet)

const { PORT } = process.env
app.listen(PORT, () => console.log(`server listening on port ${PORT}`))