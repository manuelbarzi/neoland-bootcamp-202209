const { createServer } = require('http')
const { readFile } = require('fs')

function parseQuerystring(url) {
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

        res.writeHead(200, { 'Content-type': 'application/json' })

        const data = JSON.parse(json)

        // DONE parse query string (param q)
        const { q, name, surname, team, number, position, country } = parseQuerystring(req.url)

        // DONE filter data by param q, name, ...
        let filtered = data

        if (q)
        filtered = filtered.filter(item => item.name.includes(q) || item.surname.includes(q) || item.team.includes(q) || item.number.includes(q) || item.position.includes(q) || item.country.includes(q))

        if (name)
        filtered = filtered.filter (item => item.name.includes(name))
        
        if (surname)
        filtered = filtered.filter (item => item.surname.includes(surname))

        if (team)
        filtered = filtered.filter (item => item.team.includes(team))
        
        if (number)
        filtered = filtered.filter (item => item.number.includes(number))
        
        if (position)
        filtered = filtered.filter (item => item.position.includes(position))
        
        if (country)
        filtered = filtered.filter (item => item.country.includes(country)
        )
        
        // DONE respond with the results

        res.writeHead(200, { 'Content-type': 'application/json' })
        res.end(JSON.stringify(filtered))
    })
})

api.listen(8080)
console.log ('api listen on port 8080');