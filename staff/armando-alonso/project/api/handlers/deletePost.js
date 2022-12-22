const deletePost = require('../logic/deletePost')

module.exports = (req, res) => {
    try {
        const { headers: { authorization }, params: { postId } } = req

        const userId = authorization.substring(7)
        
        deletePost( userId, postId)
            .then(() => res.status(204).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}