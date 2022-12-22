const express = require('express')
const { readFile } = require('fs')

const api = express()

api.get('/hello-world', (req, res) => res.send('hola mundo'))

api.get('/search', (req, res) => {
    readFile('db.json', 'utf8', (error, json) => {
        if (error) {
            res.status(500)
            res.setHeader('Content-type', 'application/json')
            res.send(`{ "error": ${error.message} }`)

            return
        }

        const data = JSON.parse(json)

        const { q } = req.query

        let filtered = data 

        filtered = filtered.filter(item => item.imageUrl.includes(q) || item.code.includes(q) || item.text.includes(q))

        res.status(200)
        res.setHeader('Content-type', 'application/json')
        res.json(filtered)
    })
})

api.listen(8080)