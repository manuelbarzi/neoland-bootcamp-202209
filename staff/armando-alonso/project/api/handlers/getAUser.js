const getAUser = require('../logic/getAUser')

module.exports = (req, res) => {
    const { headers: { authorization }, params: { targetUserId } } = req

    const userId = authorization.substring(7)

    try {
        getAUser(userId, targetUserId)
            .then(target => res.json(target))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}