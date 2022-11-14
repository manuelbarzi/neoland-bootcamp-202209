const express = require('express')
const searchHttpCats = require('./logic/searchHttpCats')
const authenticateUser = require('./logic/authenticateUser')
const retrieveUser = require('./logic/retrieveUser')
const registerUser = require('./logic/registerUser')

const bodyParser = require("body-parser");

const jsonBodyParser = bodyParser.json();
// middleware to parse json
const formBodyParser = bodyParser.urlencoded({ extended: false });
// Ejemplo en ./middlewares/formUrlEncodedBodyParser
// middleware to parse urlencoded form

const app = express()

app.use(express.static('public'))

const loginFormTemplate = (req, res) => {
    res.status(200)
    res.setHeader('Content-Type', 'text/html')
    res.send(`<html class="h-screen">
                <head>
                    <title>Http Cats</title>
                    <link href="/style.css" rel="stylesheet" />
                </head>
                <body class="flex h-full justify-center">
                    <div class="h-full flex flex-col flex-wrap justify-center items-center">
                        <form class="flex flex-col items-start flex-wrap" action="/login" method="post">
                            <input type="email" name="email" placeholder="email" />
                            <input class="p-4" type="password" name="password" placeholder="password" />
                            <button class="self-center">Login</button>
                        </form>
                         <a href="/register">Register</a>
                    </div>
                </body>
            </html>`)
}
app.get('/login', loginFormTemplate)

const loginFormRequest = (req, res) => {
    const { email, password } = req.body;
    try {
        const userFind = (error, user) => {
            if (error) {
                res.status(500)
                res.send(error.message)

                return
            }

            res.setHeader('set-cookie', `id=${user.id}`)
            res.redirect('/')
        }
        authenticateUser(email, password, userFind)

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
app.post("/login", formBodyParser, loginFormRequest);

const indexTemplate = (req, res) => {
    const { cookie } = req.headers // id=user-2

    if (!cookie) {
        res.redirect('/login')

        return
    }

    const { q } = req.query
    const formSearchTemplate =
        `<h1>Search</h1>
        <form action="/search">
            <input type="text" name="q" value="${q}">
            <button>Search</button>
        </form>`;
    if (q === undefined) {
        res.status(200)
        res.setHeader('Content-Type', 'text/html')
        res.send(`<html>
        <head>
        <title>Http Cats</title>
        </head>
        <body> 
        ${formSearchTemplate}
        </body>
        </html>`);

        return
    }

    const [, userId] = cookie.split('=')
    try {
        const userTouch = (error, user) => {
            if (error) {
                res.status(500)
                res.send(error.message)

                return
            }

            res.setHeader('Content-Type', 'text/html')
            res.send(`<html>
                <head>
                    <title>Http Cats</title>
                    <link href="/style.css" rel="stylesheet" />
                </head>
                <body class="flex flex-col items-center">
                    hello ${user.name}!
                    
                </body>
            </html>`)
        }
        retrieveUser(userId, userTouch)

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
app.get('/', indexTemplate)

const registerFormTemplate = (req, res) => {
    const { cookie } = req.headers // id=user-2
    if (cookie) {
        res.redirect('/')

        return
    }

    res.status(200)
    res.setHeader('Content-Type', 'text/html')
    res.send(`<html>
                <head>
                    <title>Http Cats</title>
                    <link href="/style.css" rel="stylesheet" />
                </head>
                <body class="flex flex-col items-center">
                    <form class="flex flex-col items-center" method="post" action="/register">
                        <input type="name" name="name" placeholder="name" />
                        <input type="email" name="email" placeholder="email" />
                        <input type="password" name="password" placeholder="password" />
                        <button>Register</button>
                    </form>
                    <a href="/login">Login</a>
                </body>
            </html>`)
}
app.get('/register', registerFormTemplate)

const registerFormRequest = (req, res) => {
    const { name, email, password } = req.body;
    try {
        registerUser(name, email, password, error => {
            if (error) {
                res.status(500)
                res.send(error.message)

                return
            }
            res.redirect('/login')
        })
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
app.post('/register', formBodyParser, registerFormRequest)

// http://localhost/search?q=C
const searchTemplate = (req, res) => {
    const { q } = req.query
    const formSearchTemplate =
        `<h1>Search</h1>
                <form action="/search">
                    <input type="text" name="q" value="${q}">
                    <button>Search</button>
                </form>`;
    if (q === undefined) {
        res.status(200)
        res.setHeader('Content-Type', 'text/html')
        res.send(`<html>
        <head>
            <title>Http Cats</title>
        </head>
        <body> 
        ${formSearchTemplate}
        </body>
        </html>`);

        return
    }

    const catsFinder = (error, cats) => {
        if (error) {
            res.status(500)
            res.setHeader('Content-Type', 'text/html')
            res.send(`<html>
                <head>
                    <title>Http Cats</title>
                </head>
                <body>
                    <h1>Error: ${error.message}</h1>
                </body>
            </html>`)

            return
        }

        res.status(200)
        res.setHeader('Content-Type', 'text/html')
        res.send(`<html>
                <head>
                    <title>Http Cats</title>
                </head>
                <body>
                ${formSearchTemplate}
                    <h1>Results</h1>
                    <ul>
                        ${cats.reduce((lis, cat) => {
            return lis + `<li>
                                <img src="${cat.imageUrl}" />
                                <h2>${cat.code}</h2>
                                <p>${cat.text}</p>
                            </li>`
        }, '')}
                    </ul>
                </body>
            </html>`)
    }
    searchHttpCats(q, catsFinder)
}
app.get('/search', searchTemplate)
/* function generateSearchPageTemplate(cats) {
    let result = `<html>
    <head>
        <title>Http Cats</title>
    </head>
    <body>
    <h1>Search</h1>
    <form action="/search">
        <input type="text" name="q" value="${q}">
        <button>Search</button>
    </form>`;
    return result;
}; */

app.listen(80)