const newPost = require('../logic/newPost')


module.exports = (req, res) => {
    let { content, userId, userName } = req.body

    try {
        newPost(content, userId, userName, error => {
            if (error) {
                res.status(500).json(({ error: 'server error' }))

                return
            }

            res.status(200).send()
        })
    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}