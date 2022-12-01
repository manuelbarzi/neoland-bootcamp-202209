const newPost = require('../logic/newPost')

module.exports = (req, res) => {
    try {
        const { body: { text, visibility }, userId } = req

        newPost(userId, text, visibility)
            .then(() => res.status(201).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}