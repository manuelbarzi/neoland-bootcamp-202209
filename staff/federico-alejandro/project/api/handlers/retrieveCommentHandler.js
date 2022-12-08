const retrieveComment = require('../logic/retrieveComment')

module.exports = (req, res) => {
    try {
        const { params: { postId }, userId, commentId } = req

        retrieveComment(userId, postId, commentId)
            .then(comment => res.json(comment))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}