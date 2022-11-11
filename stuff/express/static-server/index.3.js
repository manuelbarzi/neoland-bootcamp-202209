const express = require('express')
const { readFile } = require('fs')

const server = express()

const static = folder => (req, res) => {
    if (req.method !== 'GET') {
        res.status(404)
        res.send(`Cannot ${req.method}`)

        return
    }

    const path = req.path === '/' ? '/index.html' : req.path

    readFile(folder + path, (error, content) => {
        if (error) {
            res.status(404)
            res.send(`Cannot GET ${path}`)

            return
        }

        if (path.endsWith('.html'))
            res.setHeader('Content-Type', 'text/html')
        else if (path.endsWith('.ico'))
            res.setHeader('Content-Type', 'image/x-icon')

        res.send(content)
    })
}

server.use(static('public'))

server.listen(80) // http