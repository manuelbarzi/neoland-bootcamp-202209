module.exports = (req, res, next) => {
    let content = ''

    // escuchador -  video 11.11.20
    req.on('data', chunk => content += chunk.toString())

    req.on('end', () => {
        const body = JSON.parse(content)

        req.body = body

        next()
    }) 
}