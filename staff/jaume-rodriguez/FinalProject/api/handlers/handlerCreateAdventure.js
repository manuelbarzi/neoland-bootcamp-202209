const createAdventure = require('../logic/createAdventure')

module.exports = (req, res) => {
    try {
        const { body: { title, isMainAdventure }, userId } = req

        createAdventure(userId, title, isMainAdventure)
            .then(() => res.status(201).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}