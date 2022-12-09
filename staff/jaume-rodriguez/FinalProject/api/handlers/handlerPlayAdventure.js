const playAdventure = require('../logic/playAdventure')

module.exports = (req, res) => {
    try {
        const { userId, params: { adventureId } } = req

        playAdventure(userId, adventureId)
            .then(() => res.status(204).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}