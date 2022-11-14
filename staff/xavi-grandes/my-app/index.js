const express = require("express");

// guardo en una constante global, el requisito de la lógica
const searchHttpCats = require('./logic/searchHttpCats')

const app = express();

// usamos el siguiente código para servir imágenes, archivos CSS y archivos JavaScript en un directorio llamado public: y usamos la funcion (express.static()) para determinar el archivo a servir mediante la combinación req.url con el rootdirectorio proporcionado.
// use -> para culaquier ruta
app.use(express.static("public"));


// yo decido cual será el controlador de la ruta
// no hay petiticon de datos al servidor
// la app coge la web '/' y responde con la renderizacion del código 200
app.get("/", (req, res) => {
    res.status(200);
    res.setHeader("Content-Type", "text/html");
    res.send(` <html>
                    <head>
                        <title>Http Cats</title>
                    </head>
                    <body>
                        <h1>Search</h1>
                        <form action='/search'>
                            <input type='text' name='q'>
                            <button>Search</button>
                        </form>
                    </body>
                </html>`);
})


app.post ('/login', (req, res) => {
    let content = ''

    req.on ('data', chunk)
})


// http://localhost/search?q=C
// get = pido al servidor
app.get('/search', (req, res) => {
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
})
