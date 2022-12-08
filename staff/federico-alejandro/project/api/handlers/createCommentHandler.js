const createComment = require('../logic/createComment')

module.exports = (req, res) => {
    try {
        const { body: { text }, params: { postId }, userId } = req

        createComment(userId, postId, text )
            .then(() => res.status(201).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}