const retrieveUser = require('../logic/retrieveUser')

module.exports = (req, res) => {
    const { headers: { authorization } } = req

    const userId = authorization.substring(7)

    try {
        const returnUser = (error, user) => {
            if (error) {
                res.status(500)
                res.json({ error: error.message })

                return
            }

            res.json(user)
        }
        retrieveUser(userId, returnUser)
    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}