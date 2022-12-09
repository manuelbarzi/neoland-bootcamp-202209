const retrieveWorldAdventures = require('../logic/retrieveWorldAdventures')

module.exports = (req, res) => {
    try {
        const { userId } = req

        retrieveWorldAdventures(userId)
            .then(adventures => res.json(adventures))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}