const retrieveUserPost = require("../logic/retrieveUserPost")

module.exports = (req, res) => {
    const { headers: { authorization }, params: { postId } } = req

    const userId = authorization.substring(7)

    try {
        retrieveUserPost(userId, postId, (error, post) => {
            if (error) {
                res.status(500)
                res.json({ error: error.message })

                return
            }

            res.json(post)
        })
    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}