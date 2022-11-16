const express = require('express')
const searchHttpCats = require('./logic/searchHttpCats')
const authenticateUser = require('./logic/authenticateUser')
const retrieveUser = require('./logic/retrieveUser')
const registerUser = require('./logic/registerUser')

const app = express()

app.use(express.static('public'))

app.get('/login', (req, res) => {
    const { cookie } = req.headers // id=user-2

    if (cookie) {
        res.redirect('/')

        return
    }

    res.status(200)
    res.setHeader('Content-Type', 'text/html')
    res.send(`<html>
                <head
                    <title>Http Cats</title>
                    <link href="/public/style.css" rel="stylesheet" /> 
                </head>
                <body class="flex flex-col items-center">
                    <form class="flex flex-col items-center" action="/login" method="post">
                        <input type="email" name="email" placeholder="email" />
                        <input type="password" name="password" placeholder="password" />
                        <button>Login</button>
                    </form>
                    <a href="/register">Register</a>
                </body>
            </html>`)
})

app.post('/login', (req, res) => {
    let content = ''

    req.on('data', chunk => content += chunk.toString())

    req.on('end', () => {
        // email=wendy%40darling.com&password=123123123 // url-encoded

        let { email, password } = content.split('&').reduce((body, keyValue) => {
            const [key, value] = keyValue.split('=')

            body[key] = value

            return body
        }, {})

        email = email.replace('%40', '@')

        try {
            authenticateUser(email, password, (error, userId) => {
                if (error) {
                    res.status(500)
                    res.send(error.message)

                    return
                }

                res.setHeader('set-cookie', `id=${userId}`) // session cookie
                res.redirect('/')
            })
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    })
})

app.get('/', (req, res) => {
    const { cookie } = req.headers // id=user-2

    if (!cookie) {
        res.redirect('/login')

        return
    }

    const [, userId] = cookie.split('=')

    try {
        retrieveUser(userId, (error, user) => {
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
                    <form action="/logout" method="post">
                        <button>Logout</button>
                    </form>
                </body>
            </html>`)
        })
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
})

app.post('/logout', (req, res) => {
    // res.setHeader('set-cookie', `id=; Expires=${new Date(2000, 0, 1)}`)
    res.clearCookie('id')
    res.redirect('/login')
})

app.get('/register', (req, res) => {
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
})

app.post('/register', (req, res) => {
    let content = ''

    req.on('data', chunk => content += chunk.toString())

    req.on('end', () => {
        // name=Wendy%20Darling&email=wendy%40darling.com&password=123123123 // url-encoded

        let { name, email, password } = content.split('&').reduce((body, keyValue) => {
            // const { 0: key, 1: value } = keyValue.split('=')
            const [key, value] = keyValue.split('=')

            body[key] = value

            return body
        }, {})

        name = name.replace('+', ' ')
        email = email.replace('%40', '@')

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
    })
})

// http://localhost/search?q=C
app.get('/search', (req, res) => {
    const { q } = req.query

    searchHttpCats(q, (error, cats) => {
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
                    <h1>Search</h1>
                    <form action="/search">
                        <input type="text" name="q" value="${q}">
                        <button>Search</button>
                    </form>
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
    })
})

app.listen(80)