const retrieveMainAdventures = require('../logic/retrieveMainAdventures')

module.exports = (req, res) => {
    try {
        const { userId } = req

        retrieveMainAdventures(userId)
            .then(adventures => res.json(adventures))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}