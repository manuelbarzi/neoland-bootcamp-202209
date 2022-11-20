const retrieveUserPerfil = require('../logic/retrieveUserPerfil')

module.exports = (req, res) => {
    const { headers: { authorization }, params: { searchedUserId } } = req

    const userId = authorization.substring(7)

    try {
        retrieveUserPerfil(userId, searchedUserId, (error, user) => {
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