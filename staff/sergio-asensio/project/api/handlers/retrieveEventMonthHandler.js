const retrieveEventMonth = require('../logic/retrieveEventMonth')

module.exports = (req, res) => {
    try {
        const { userId, params: { month } } = req

        retrieveEventMonth(userId, month)
            .then(posts => res.json(posts))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}