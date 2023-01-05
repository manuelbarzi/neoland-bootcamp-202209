const editPost = require('../logic/editPost')

module.exports = (req, res) => {
    try {
    const { body: { text, visibility }, userId, params: { postId } } = req

        editPost(userId, postId, text, visibility)
            .then(() => res.status(204).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}