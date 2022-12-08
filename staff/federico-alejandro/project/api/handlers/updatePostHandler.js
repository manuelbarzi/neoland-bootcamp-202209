const updatePost = require('../logic/updatePost')

module.exports = (req, res) => {
    try {
        const { body: { title ,text, visibility, image }, params: { postId }, userId } = req

        updatePost(userId, postId, title, text, visibility, image)
            .then(() => res.status(204).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}