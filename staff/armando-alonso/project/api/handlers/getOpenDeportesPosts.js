const getOpenDeportesPosts = require('../logic/getOpenDeportesPosts')

module.exports = (req, res) => {
    try {
        getOpenDeportesPosts()
            .then(posts => res.json(posts))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

