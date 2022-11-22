const updatePost = require('../logic/updatePost')

module.exports = (req, res) => {

    const postId = req.params.postId
    const { text, visibility } = req.body

    try {
        const editPost = updatePost(postId, text, visibility)
        res.status(201).send(editPost)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}