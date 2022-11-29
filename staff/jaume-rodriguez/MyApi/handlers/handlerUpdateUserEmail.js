const updateUserEmail = require('../logic/updateUserEmail')

module.exports = (req, res) => {
    const { body: { newEmail }, headers: { authorization } } = req

    const userId = authorization.substring(7)

    try {
        updateUserEmail(userId, newEmail)
            .then(() => res.status(204).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}