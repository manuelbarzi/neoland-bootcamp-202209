const { ConflictError, NotFoundError, FormatError, AuthError } = require('com')
const deletePost = require('../logic/deletePost')

module.exports = (req, res) => {
    try {
        const { params: { postId }, userId } = req

        deletePost(userId, postId)
            .then(() => res.status(204).send())
            .catch(error => {
                if (error instanceof AuthError)  res.status(401).json({ error: error.message })
                 else if (error instanceof ConflictError) res.status(409).json({ error: error.message })
                else if (error instanceof NotFoundError) res.status(404).json({ error: error.message })
                else res.status(500).json({ error: error.message })
            })
    } catch (error) {
        if (error instanceof TypeError || error instanceof FormatError)
        res.status(400).json({ error: error.message })
    else
        res.status(500).json({ error: error.message })
    }
}