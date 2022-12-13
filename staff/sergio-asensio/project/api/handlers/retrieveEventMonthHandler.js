const retrieveEventMonth= require('../logic/retrieveEventMonth')

module.exports = (req, res) => {
    try {
        const { userId } = req

        retrieveEventMonth(userId)
            .then(events => res.json(events))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}