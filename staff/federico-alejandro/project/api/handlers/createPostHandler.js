const { ConflictError, NotFoundError, FormatError, LengthError, AuthError } = require('com')
const createPost = require('../logic/createPost')

module.exports = (req, res) => {
    try {
        const { body: { title, text, visibility, image }, userId } = req

        createPost(userId, title, text, visibility, image)
            .then(() => res.status(201).send())
            .catch(error => {
                if (error instanceof AuthError) res.status(401).json({ error: error.message })
                else if (error instanceof NotFoundError) res.status(404).json({ error: error.message })
                else if (error instanceof ConflictError) res.status(409).json({ error: error.message })
                else res.status(500).json({ error: error.message })
            })
    } catch (error) {
        if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
            res.status(400).json({ error: error.message })
        else
            res.status(500).json({ error: error.message })
    }
}
