const updatePost = require('../logic/updatePost')

module.exports = (req, res) => {
    const { body: { text, visibility }, headers: { authorization }, params: { postId } } = req

    const userId = authorization.substring(7)

    try {
        updatePost(userId, postId, text, visibility)
            .then(() => res.status(204).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}