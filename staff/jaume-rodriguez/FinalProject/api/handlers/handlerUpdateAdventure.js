const updateAdventure = require('../logic/updateAdventure')

module.exports = (req, res) => {
    try {
        const { body: { title, isMainAdventure }, userId, params: { adventureId } } = req

        updateAdventure(userId, adventureId, title, isMainAdventure)
            .then(() => res.status(204).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}