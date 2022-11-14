const { readFile } = require ('fs')
const { type } = require('os')

function searchHttpCats(query, callback) {
    if (typeof query !== 'string') throw new TypeError ('query is not a string')
    if (typeof callback !== 'function') throw new TypeError ('callback is not a function')

    readFile ('./data/cats.json', 'utf-8', (error, json) => {
        if (error){
        callback (error)

        return
        }

        // convierte el string que envía JSON en un objeto cuardado en cats
        const cats = JSON.parse(json)

        // filtramos el objeto de cats y buscamos los parámetros que necesitamos (code y text) para enviar a la petición de index.js
        const filtered = cats.filter(cat => cat.code.includes(query) || cat.text.includes(query))

        // ejecuto el callback
        callback(null, filtered)
    })
}

module.exports = searchHttpCats