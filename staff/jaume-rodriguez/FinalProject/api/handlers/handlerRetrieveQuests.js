const retrieveQuests = require('../logic/retrieveQuests')

module.exports = (req, res) => {
    try {
        const { userId } = req

        retrieveQuests(userId)
            .then(quests => res.json(quests))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}