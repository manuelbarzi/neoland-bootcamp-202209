const createPost = require('../logic/createPost')

module.exports = (req, res) => {
    let { userId, visibilityPost } = req.body

    try {
        const errorCreation = (error) => {
            if (error) {
                res.status(500)
                res.json({ error: error.message })

                return
            }
            res.status(201).send()
        }
        createPost(userId, visibilityPost, errorCreation)

    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}