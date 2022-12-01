const userSearched = require('../logic/userSearched')

module.exports = (req, res) => {
    try {
    const { userId, params: { searchUserId } } = req

        userSearched(userId, searchUserId)
            .then(name => res.json({ name }))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}