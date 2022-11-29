const retrievePosts = require('../logic/retrievePosts')

module.exports = (req, res) => {
    const { headers: { authorization }, params: { postId } } = req

    const userId = authorization.substring(7)

    try {
        retrievePosts(userId, postId)
            .then(posts => res.json(posts))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}