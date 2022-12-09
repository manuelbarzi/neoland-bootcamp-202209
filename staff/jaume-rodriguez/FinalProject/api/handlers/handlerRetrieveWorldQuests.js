const retrieveWorldQuests = require('../logic/retrieveWorldQuests')

module.exports = (req, res) => {
    try {
        const { userId } = req

        retrieveWorldQuests(userId)
            .then(quests => res.json(quests))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}