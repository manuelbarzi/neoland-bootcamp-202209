const retrieveAccesPosts = require('../logic/retrieveAccessPosts')


module.exports = (req, res) => {
    const { headers: { authorization } } = req

    const userId = authorization.substring(7)

    try {
        retrieveAccesPosts(userId, (error, posts) => {
            if (error) {
                res.status(500).json({ error: error.message })

                return
            }

            res.json(posts)
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}