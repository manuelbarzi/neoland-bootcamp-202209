const updatePost = require('../logic/updatePost')

module.exports = async (req, res) => {

    const postId = req.params.postId
    const { text, visibility } = req.body

    try {
        const edited = await updatePost(postId, text, visibility)

        const modified = edited ? true : false

        res.status(200).send({ modified })
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}