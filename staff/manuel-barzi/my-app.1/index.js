const express = require('express')
const { readFile } = require('fs')

const app = express()

app.get('/', (req, res) => {
    readFile('./public/index.html', (error, html) => {
        if (error) {
            res.status(500)
            res.setHeader('Content-Type', 'application/json')
            res.json({ error: error.message })

            return
        }

        res.status(200)
        res.setHeader('Content-Type', 'text/html')
        res.send(html)
    })
})

app.get('/index.html', (req, res) => {
    readFile('./public/index.html', (error, html) => {
        if (error) {
            res.status(500)
            res.setHeader('Content-Type', 'application/json')
            res.json({ error: error.message })

            return
        }

        res.status(200)
        res.setHeader('Content-Type', 'text/html')
        res.send(html)
    })
})

app.get('/favicon.ico', (req, res) => {
    readFile('./public/favicon.ico', (error, favicon) => {
        if (error) {
            res.status(500)
            res.setHeader('Content-Type', 'application/json')
            res.json({ error: error.message })

            return
        }

        res.status(200)
        res.setHeader('Content-Type', 'image/vnd.microsoft.icon')
        res.send(favicon)
    })
})

app.listen(80)
