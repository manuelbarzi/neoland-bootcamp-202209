const { createServer } = require('http')

const server = createServer((req, res) => {
    res.writeHead(200)
    res.end('hola mundo')
})

server.listen(8080)