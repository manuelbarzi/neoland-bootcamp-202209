const searchHttpCats = require('../logic/searchHttpCats')

module.exports = (req, res) => {
    try {
        const { q } = req.query

        searchHttpCats(q, (error, cats) => {
            if (error) {
                res.status(500)
                res.json({ error: error.message })

                return
            }

            res.status(200)
            res.json(cats)
            // Este método json() envía una respuesta con el parámetro convertido a una string JSON usando el método JSON.stringify()
        })
    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}