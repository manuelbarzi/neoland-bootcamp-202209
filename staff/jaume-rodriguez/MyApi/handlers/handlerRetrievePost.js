const retrievePost = require('../logic/retrievePost')

module.exports = (req, res) => {
    const { headers: { authorization }, params: { postId } } = req

    const userId = authorization.substring(7)

    try {
        retrievePost(userId, postId)
            .then(post => res.json(post))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}