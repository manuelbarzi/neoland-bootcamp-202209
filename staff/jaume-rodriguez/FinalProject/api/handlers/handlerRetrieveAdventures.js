const retrieveAdventures = require('../logic/retrieveAdventures')

module.exports = (req, res) => {
    try {
        const { userId } = req

        retrieveAdventures(userId)
            .then(adventures => res.json(adventures))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}