const userSearched = require('../logic/userSearched')

module.exports = (req, res) => {
    const { headers: { authorization }, params: { searchUserId } } = req

    const userId = authorization.substring(7)

    try {
        userSearched(userId, searchUserId, (error, searchedUser) => {
            if (error) {
                res.status(500)
                res.json({ error: error.message })

                return
            }

            res.json(searchedUser)
        })
    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}