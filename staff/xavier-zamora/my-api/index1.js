const { createServer } = require('http')
const { createReadStream } = require('fs')

const api = createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'application/json' })

    const rs = createReadStream('./db.json')

    rs.pipe(res)
})

api.listen(8080)