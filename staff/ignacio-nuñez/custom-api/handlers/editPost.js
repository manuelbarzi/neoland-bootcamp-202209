const editPost = require("../logic/editPost")

module.exports = (req, res) => {
    const { body: { content, visibility }, headers: { authorization }, params: { postId } } = req

    const userId = authorization.substring(7)

    try {
        editPost(userId, postId, content, visibility, error => {
            if (error) {
                res.status(500).json(({ error: 'server error' }))

                return
            }

            res.status(201).send()
        })
    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}