const retrieveAUser = require('../logic/retrieveAUser')

module.exports = (req, res) => {
    const { headers: { authorization }, params: { targetUserId } } = req

    const userId = authorization.substring(7)

    try {
        retrieveAUser(userId, targetUserId)
            .then(user => res.json(user))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}