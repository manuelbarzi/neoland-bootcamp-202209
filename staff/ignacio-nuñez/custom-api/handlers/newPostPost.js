const newPost = require('../logic/newPost')


module.exports = (req, res) => {
    let { content, userId, userName } = req.body

    try {
        newPost(content, userId, userName, (error, status) => {
            if (error) {
                res.status(status)
                res.json({ error: error.message })
                return
            }

            res.status(status).send()
        })
    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}