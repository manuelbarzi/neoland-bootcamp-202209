const createPost = require('../logic/createPost')

module.exports = (req, res) => {
    try {
        const { body: { title, text, visibility, image }, userId } = req

        createPost(userId, title, text, visibility, image)
            .then(() => res.status(201).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
