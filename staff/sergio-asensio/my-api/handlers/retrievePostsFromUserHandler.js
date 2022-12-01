const retrievePostsFromUser = require('../logic/retrievePostsFromUser')

module.exports = (req, res) => {
    try {
        const { params: { targetUserId }, userId } = req
        
        retrievePostsFromUser(userId, targetUserId)
            .then(posts => res.json(posts))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}