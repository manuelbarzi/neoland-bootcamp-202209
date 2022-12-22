const { createServer } = require('http')
const { readFile } = require('fs')

function parseQueryStringFromUrl(url) {
    // req.url -> '/?name=Pepito&surname=Grillo'
    const query = url.substring(2).split('&').reduce((params, item) => {
        const [key, value] = item.split('=')

        params[key] = value

        return params
    }, {})

    return query
}

const api = createServer((req, res) => {
    readFile('db.json', 'utf8', (error, json) => {
        if (error) {
            res.writeHead(500, { 'Content-type': 'application/json' })

            res.end(`{ "error": ${error.message} }`)

            return
        }

        const data = JSON.parse(json)

        // DONE parse query string (param q)

        const { q, name, surname } = parseQueryStringFromUrl(req.url)

        // DONE filter data by param q, name, ...

        let filtered = data

        if (q)
            filtered = filtered.filter(item => item.name.includes(q) || item.surname.includes(q) || item.email.includes(q) || item.phone.includes(q))
        
        if (name)
            filtered = filtered.filter(item => item.name.includes(name))

        if (surname)
            filtered = filtered.filter(item => item.surname.includes(surname))

        // DONE respond with the results

        res.writeHead(200, { 'Content-type': 'application/json' })
        res.end(JSON.stringify(filtered))
    })
})

api.listen(8080)
