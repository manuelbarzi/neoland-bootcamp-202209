const { createServer } = require('http')
const { readFile } = require('fs')

const api = createServer((req, res) => {
    readFile('db.json', 'utf8', (error, json) => {
        if (error) {
            res.writeHead(500, { 'Content-type': 'application/json' })

            res.end(`{ "error": ${error.message} }`)

            return
        }

        res.writeHead(200, { 'Content-type': 'application/json' })

        const data = JSON.parse(json)

        // TODO parse query string (param q)
        // TODO filter data by param q
        // TODO respond with the results

        res.end(JSON.stringify(data))
    })
})

api.listen(8080)

