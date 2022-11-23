const returnUser = require('../logic/returnUser')

module.exports = (req, res) => {
    const { headers: { authorization } } = req

    const userId = authorization.substring(7)

    try {
        returnUser(userId, (error, user) => {
            if (error) {
                res.status(500)
                res.json({ error: error.message })

                return
            }

            res.json(user)
        })
    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}