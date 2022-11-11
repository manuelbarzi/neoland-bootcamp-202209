const express = require('express')

const server = express()

server.use((req, res) => {
    res .send(`
        You requested me with method ${req.method} and path ${req.path}
    `)
})

server.listen(80) // http