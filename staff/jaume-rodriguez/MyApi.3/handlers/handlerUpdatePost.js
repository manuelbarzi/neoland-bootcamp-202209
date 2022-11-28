const updatePost = require('../logic/updatePost')

module.exports = (req, res) => {
    const { body: { text, visibility }, headers: { authorization }, params: { postId } } = req

    const userId = authorization.substring(7)

    try {
        const errorUpdate = error => {
            if (error) {
                res.status(500).json({ error: error.message })

                return
            }

            res.status(204).send()
        }
        updatePost(userId, postId, text, visibility, errorUpdate)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}