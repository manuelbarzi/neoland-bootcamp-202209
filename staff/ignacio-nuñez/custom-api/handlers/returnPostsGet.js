const retrievePosts = require("../logic/retrievePosts")

module.exports = (req, res) => {
    const { authorization } = req.headers

    const userId = authorization.substring(7)

    try {
        retrievePosts(userId, (error, posts) => {
            if (error) {
                res.status(500)
                res.json({ error: error.message })

                return
            }

            res.json(posts)
        })
    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}