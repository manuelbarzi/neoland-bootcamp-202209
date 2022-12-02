const { readFile } = require('fs')

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
        else if (path.endsWith('.css'))
            res.setHeader('Content-Type', 'text/css')

        res.send(content)
    })
}

module.exports = static