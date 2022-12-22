const getClosedDeportesPosts = require('../logic/getClosedDeportesPosts')

module.exports = (req, res) => {
    const { headers: { authorization } } = req

    const userId = authorization.substring(7)

    try {
        getClosedDeportesPosts(userId)
            .then(posts => res.json(posts))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

