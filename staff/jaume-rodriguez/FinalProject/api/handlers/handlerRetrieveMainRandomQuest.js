const retrieveMainRandomQuest = require('../logic/retrieveMainRandomQuest')

module.exports = (req, res) => {
    try {
        const { userId } = req

        retrieveMainRandomQuest(userId)
            .then(quests => res.json(quests))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}