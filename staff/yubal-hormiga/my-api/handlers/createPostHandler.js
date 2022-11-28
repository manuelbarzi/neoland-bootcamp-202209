const createPost = require('../logic/createPost')

module.exports = (req, res) => {
    const { body: { text, visibility }, headers: { authorization } } = req

    const userId = authorization.substring(7)

    try {
        createPost(userId, text, visibility)
            .then(() => res.status(201).send())
            .catch(error => res.status(500).json({ error: error.message }))

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}