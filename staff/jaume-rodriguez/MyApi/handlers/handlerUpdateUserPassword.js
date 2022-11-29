const updateUserPassword = require('../logic/updateUserPassword')

module.exports = (req, res) => {
    const { body: { newPassword }, headers: { authorization } } = req

    const userId = authorization.substring(7)

    try {
        updateUserPassword(userId, newPassword)
            .then(() => res.status(204).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}