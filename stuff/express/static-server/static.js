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

        if (path.endsWith('.html')) {
            res.setHeader('Content-Type', 'text/html')

            content += '\n<!-- Content provided by Pepitos Web Server (10% discount for new users with coupon DISC10) -->'
        } else if (path.endsWith('.ico'))
            res.setHeader('Content-Type', 'image/x-icon')
        else if (path.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css')

            content += '\n/* Content provided by Pepitos Web Server (10% discount for new users with coupon DISC10) */'
        } else if (path.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript')

            content += '\nconsole.log("Content provided by Pepitos Web Server (10% discount for new users with coupon DISC10)")'
        }

        res.send(content)
    })
}

module.exports = static