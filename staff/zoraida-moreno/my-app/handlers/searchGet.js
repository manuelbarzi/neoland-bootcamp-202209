module.exports = (req, res) => {
    const { q } = req.query

    searchHttpCats(q, (error, cats) => {
        if (error) {
            res.status(500)
            res.setHeader('Content-Type', 'text/html')
            res.send(`<html>
                <head>
                    <title>Http Cats</title>
                </head>
                <body>
                    <h1>Error: ${error.message}</h1>
                </body>
            </html>`)

            return
        }

        res.status(200)
        res.setHeader('Content-Type', 'text/html')
        res.send(`<html>
                <head>
                    <title>Http Cats</title>
                </head>
                <body>
                    <h1>Search</h1>
                    <form action="/search">
                        <input type="text" name="q" value="${q}">
                        <button>Search</button>
                    </form>
                    <h1>Results</h1>
                    <ul>
                        ${cats.reduce((lis, cat) => {
            return lis + `<li>
                                <img src="${cat.imageUrl}" />
                                <h2>${cat.code}</h2>
                                <p>${cat.text}</p>
                            </li>`
        }, '')}
                    </ul>
                </body>
            </html>`)
    })
}