const createPost = require('../logic/createPost')

module.exports = (req, res) => {
    const { body: { text, visibility }, headers: { authorization } } = req

    const userId = authorization.substring(7)

    try {
        const errorCreation = (error) => {
            if (error) {
                res.status(500)
                res.json({ error: error.message })

                return
            }
            res.status(201).send()
        }
        createPost(userId, text, visibility, errorCreation)

    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}