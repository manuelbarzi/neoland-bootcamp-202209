const searchUsers = require("../logic/searchUsers")

module.exports = (req, res) => {
    try {
        const { query: { q }, userId } = req

        const name = q.toLowerCase()

        searchUsers(name, userId)
            .then(users => res.json(users))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
