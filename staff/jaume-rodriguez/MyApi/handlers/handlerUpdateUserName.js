const updateUserName = require('../logic/updateUserName')

module.exports = (req, res) => {
    const { body: { newName }, headers: { authorization } } = req

    const userId = authorization.substring(7)

    try {
        updateUserName(userId, newName)
            .then(() => res.status(204).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}