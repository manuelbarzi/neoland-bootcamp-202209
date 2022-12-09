const retrieveAdventure = require('../logic/retrieveAdventure')

module.exports = (req, res) => {
    try {
        const { params: { adventureId }, userId } = req

        retrieveAdventure(userId, adventureId)
            .then(quest => res.json(quest))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}