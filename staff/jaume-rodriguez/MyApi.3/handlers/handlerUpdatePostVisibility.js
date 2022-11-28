const updatePostVisibility = require('../logic/updatePostVisibility')

module.exports = (req, res) => {
    let { userId, postId, newVisibility } = req.body

    try {
        const errorVisibilityUpdate = (error) => {
            if (error) {
                res.status(500)
                res.json({ error: error.message })

                return
            }
            res.status(201).send()
        }
        updatePostVisibility(userId, postId, newVisibility, errorVisibilityUpdate)

    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}