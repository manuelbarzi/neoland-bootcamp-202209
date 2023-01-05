const retrievePosts = require("../logic/retrievePosts")

module.exports = (req, res) => {
    try {
        const { userId, query: { page, limit } } = req

        const limitPosts = parseInt(limit)

        retrievePosts(userId, page, limitPosts)
            .then(posts => res.json(posts))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}