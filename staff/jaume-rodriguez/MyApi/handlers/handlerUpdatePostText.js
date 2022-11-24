const updatePostText = require('../logic/updatePostText')

module.exports = (req, res) => {
    let { userId, postId, newText } = req.body

    try {
        const errorUpdatePostText = (error) => {
            if (error) {
                res.status(500)
                res.json({ error: error.message })

                return
            }
            res.status(201).send()
        }
        updatePostText(userId, postId, newText, errorUpdatePostText)

    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}