const express = require('express')
const { readFile } = require('fs')

const api = express()

api.get('/search', (req, res) => {
    readFile('db.json', 'utf8', (error, json) => {
        if (error) {
            res.status(500)
            res.setHeader('Content-Type', 'application/json')
            res.json({ error: error.message })

            return
        }

        const data = JSON.parse(json)

        const { q } = req.query

        let filtered = data

        if (q)
            filtered = filtered.filter(item => item.code.includes(q) || item.text.includes(q))


        res.status(200)
        res.setHeader('Content-type', 'application/json')
        //res.send(JSON.stringify(filtered))
        res.json(filtered)
    })
})

api.listen(8081)
