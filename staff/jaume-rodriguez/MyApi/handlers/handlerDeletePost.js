const deletePost = require('../logic/deletePost')

module.exports = (req, res) => {
    let { userId, postId } = req.body

    try {
        const errorDelete = (error) => {
            if (error) {
                res.status(500)
                res.json({ error: error.message })

                return
            }
            res.status(201).send()
        }
        deletePost(userId, postId, errorDelete)

    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}