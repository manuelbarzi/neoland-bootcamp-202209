const { createServer } = require('http')
const { createReadStream } = require('fs')

const PORT = 8080


const api = createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'application/json' })

    const rs = createReadStream('./db.json')

    rs.pipe(res)
})

api.listen(PORT)
console.log('server listen on port 8080')
