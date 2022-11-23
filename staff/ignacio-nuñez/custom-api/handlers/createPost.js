const newPost = require('../logic/newPost')

module.exports = (req, res) => {
    const { body: { content, userName, visibility }, headers: { authorization } } = req

    const userId = authorization.substring(7)

    try {
        newPost(content, visibility, userName, userId, error => {
            if (error) {
                res.status(500).json(({ error: 'server error' }))

                return
            }

            res.status(201).send()
        })
    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}