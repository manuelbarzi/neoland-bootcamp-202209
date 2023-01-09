const express = require('express')
const { readFile } = require('fs')

const api = express()

// api.get('/search', (req, res) => res.send('hola mundo')) -> Ejemplo


// http://localhost:8080/MyApi?
api.get('/MyApi', (req, res) => {
    readFile('db.json', 'utf8', (error, json) => {
        if (error) {
            res.status(500)
            res.setHeader('Content-type', 'application/json')
            res.send(`{ "error": ${error.message} }`)

            return
        }

        const data = JSON.parse(json)
        const { q, imageUrl, code, text } = req.query

        let filtered = data

        // http://localhost:8080/MyApi?q=
        if (q)
            filtered = filtered.filter(item => item.imageUrl.includes(q) || item.code.includes(q) || item.text.includes(q))

        // http://localhost:8080/MyApi?imageUrl=
        if (imageUrl)
            filtered = filtered.filter(item => item.imageUrl.includes(imageUrl))

        // http://localhost:8080/MyApi?code=
        if (code)
            filtered = filtered.filter(item => item.code.includes(code))

        // http://localhost:8080/MyApi?text=
        if (text)
            filtered = filtered.filter(item => item.text.includes(text))

        res.status(200)
        res.setHeader('Content-type', 'application/json')
        //res.send(JSON.stringify(filtered))
        res.json(filtered)
    })
})

api.listen(8080)