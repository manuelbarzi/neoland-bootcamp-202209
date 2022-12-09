const retrieveMainQuests = require('../logic/retrieveMainQuests')

module.exports = (req, res) => {
    try {
        const { userId } = req

        retrieveMainQuests(userId)
            .then(quests => res.json(quests))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}