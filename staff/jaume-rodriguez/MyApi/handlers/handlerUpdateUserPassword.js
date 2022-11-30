const updateUserPassword = require('../logic/updateUserPassword')

module.exports = (req, res) => {
    try {
        const { body: { newPassword }, userId } = req

        updateUserPassword(userId, newPassword)
            .then(() => res.status(204).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}