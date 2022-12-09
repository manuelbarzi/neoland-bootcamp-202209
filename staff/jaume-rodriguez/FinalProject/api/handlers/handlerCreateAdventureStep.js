const createAdventureStep = require('../logic/createAdventureStep')

module.exports = (req, res) => {
    try {
        const { body: { text }, userId, params: { adventureId } } = req

        createAdventureStep(userId, adventureId, text)
            .then(() => res.status(201).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}