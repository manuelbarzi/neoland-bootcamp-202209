const deletePost = require('../logic/deletePost')

module.exports = (req, res) => {

    const postId = req.params.postId

    try {
        deletePost(postId)
        res.status(200).send()

    } catch (error) {

        res.status(500).send({ error: error.message })

    }

}
