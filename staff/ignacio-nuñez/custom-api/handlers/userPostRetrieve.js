const retrieveUserPost = require("../logic/retrieveUserPost")

module.exports = (req, res) => {
    try {
        const { userId, params: { postId } } = req

        retrieveUserPost(userId, postId)
            .then(post => res.json(post))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
