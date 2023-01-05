const postsSearchedUserRetrieve = require('../logic/postsSearchedUserRetrieve')

module.exports = (req, res) => {
    try {
        const { userId, query: { page, limit }, params: { searchedUserId } } = req

        const limitPosts = parseInt(limit)

        postsSearchedUserRetrieve(userId, searchedUserId, page, limitPosts)
            .then(posts => res.json(posts))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}