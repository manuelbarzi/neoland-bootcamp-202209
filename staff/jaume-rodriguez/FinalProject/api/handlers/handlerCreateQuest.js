const createQuest = require('../logic/createQuest')

module.exports = (req, res) => {
    try {
        const { body: { text, isMainQuest }, userId } = req

        createQuest(userId, text, isMainQuest)
            .then(() => res.status(201).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}