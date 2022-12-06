const updateUserName = require('../logic/updateUserName')

module.exports = (req, res) => {
    try {
        const { body: { newName }, userId } = req

        updateUserName(userId, newName)
            .then(() => res.status(204).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}