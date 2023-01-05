const retrieveUser = require('../logic/retrieveUser')
const searchHttpCats = require('../logic/searchHttpCats')
const renderPage = require('./helpers/renderPage')


module.exports = (req, res) => {
    const { q } = req.query

    searchHttpCats(q, (error, cats) => {
        if (error) {
            res.status(500)
            res.setHeader('Content-type', 'text/html')
            res.send(`<html>
                <head>
                    <title> Http Cats </title>
                </head>
                <body>
                     <h1>${error.message}</h1>
                </body>
            </html>`)

            return
        }

        const { cookie } = req.headers

        const [, userId] = cookie.split('=')

        try {
            retrieveUser(userId, (error, user) => {
                if (error) {
                    res.status(500)
                    res.send(error.message)

                    return
                }
                res.status(200)
                res.setHeader('Content-type', 'text/html')
                res.send(renderPage(`hello ${user.name}!
        <form action="/logout" method="post">
        <button>Logout </button>
        </form>
        <h1>Search</h1>
        <form action="/search">
             <input type="text" name="q" value="${q}">
             <button>Search</button>
         </form>
        <h1> Results </h1>
                         <ul>
                          ${cats.reduce((lis, cat) => {
                    return lis + `<li>
                                <img src ="${cat.imageUrl}" />
                                 <h2>${cat.codeStatus}</h2>
                                  <p>${cat.textStatus}<p>
                             </li>`
                }, '')}
                 </ul>
            </body>
        </html>`))
            })
        }catch(error){
            res.status(500)
            res.send(error.message)
        }
    })
}