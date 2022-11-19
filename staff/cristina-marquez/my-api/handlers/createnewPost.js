const createnewPost = require('../logic/createPost')

module.exports = (req, res) => {
    let { user, text, visibility } = req.body

    try {
        const newPost = createnewPost(user, text, visibility)
        res.status(201).send(newPost)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}