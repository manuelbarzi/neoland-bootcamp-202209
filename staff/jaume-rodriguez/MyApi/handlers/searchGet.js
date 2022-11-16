const searchHttpCats = require('../logic/searchHttpCats')

module.exports = (req, res) => {
    try {
        const { q } = req.query

        const infoAnalyzed = (error, cats) => {
            if (error) {
                res.status(500)
                res.json({ error: error.message })

                return
            }

            res.json(cats)
        }
        searchHttpCats(q, infoAnalyzed)

    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}