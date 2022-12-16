const retrieveQuest = require('../logic/retrieveQuest')

module.exports = (req, res) => {
    try {
        const { params: { questId }, userId } = req

        retrieveQuest(userId, questId)
            .then(quest => res.json(quest))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
