const createnewPost = require('../logic/createPost')

module.exports = (req, res) => {
    let { text, visibility } = req.body

    try {
        const userId = req.user.id;
        const newPostId = createnewPost(userId, text, visibility)
        res.status(201).send(newPostId)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}