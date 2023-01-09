const retrieveAUser = require('../logic/retrieveAUser')

module.exports = (req, res) => {
    const { headers: { authorization }, params: { targetUserId } } = req

    const userId = authorization.substring(7)

    try {
        const returnRetrieve = (error, user) => {
            if (error) {
                res.status(500).json({ error: error.message })

                return
            }

            res.json(user)
        }
        retrieveAUser(userId, targetUserId, returnRetrieve)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}