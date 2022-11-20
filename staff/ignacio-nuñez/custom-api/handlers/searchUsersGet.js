const searchUsers = require("../logic/searchUsers")

module.exports = (req, res) => {
    try {
        const { query: { q }, headers: { authorization } } = req

        const userId = authorization.substring(7)

        const name = q.toLowerCase()

        searchUsers(name, userId, (error, users) => {
            if (error) {
                res.status(500)
                res.json({ error: error.message })

                return
            }

            res.json(users)
        })
    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}
