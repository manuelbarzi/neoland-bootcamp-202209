const { createServer } = require('http')
const { readFile } = require('fs')
const parseQueryStringFromUrl = require('./utils/parseQueryStringFromUrl')

const api = createServer((req, res) => {
    readFile('db.json', 'utf8', (error, json) => {
        if (error) {
            res.writeHead(500, { 'Content-type': 'application/json' })
            res.end(`{ "error": ${error.message} }`)

            return
        }

        const data = JSON.parse(json)

        const { q, name, surname } = parseQueryStringFromUrl(req.url)

        let filtered = data

        if (q)
            filtered = filtered.filter(item => item.name.includes(q) || item.surname.includes(q) || item.email.includes(q) || item.phone.includes(q))

        if (name)
            filtered = filtered.filter(item => item.name.includes(name))

        if (surname)
            filtered = filtered.filter(item => item.surname.includes(surname))

        res.writeHead(200, { 'Content-type': 'application/json' })
        res.end(JSON.stringify(filtered))
    })
})

api.listen(8080)    