const { createServer } = require('http')

function parseQuerystring(url) {
    const query = url.substring(2).split('&').reduce((params, item) => {
        const [key, value] = item.split('=')

        params[key] = value

        return params
    }, {})

    return query
}

const server = createServer((req, res) => {
    // req.url -> '/?name=Pepito&surname=Grillo'

    const query = parseQuerystring(req.url)

    res.writeHead(200, {
        'Content-type': 'text/html'
    })

    res.end(`<div>
        <h1>${query.name.toUpperCase()} ${query.surname.toUpperCase()}</h1>
        <p>${new Date}</p>
    </div>`)
})

server.listen(8080)