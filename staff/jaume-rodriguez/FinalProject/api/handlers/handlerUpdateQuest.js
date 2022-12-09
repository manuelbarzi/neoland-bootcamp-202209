const updateQuest = require('../logic/updateQuest')

module.exports = (req, res) => {
    try {
        const { body: { text, isMainQuest }, userId, params: { questId } } = req

        updateQuest(userId, questId, text, isMainQuest)
            .then(() => res.status(204).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}