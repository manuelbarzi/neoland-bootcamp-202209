const retrievePosts = require('../logic/retrievePosts')

module.exports = (req, res) => {
    const { headers: { authorization } } = req

    const userId = authorization.substring(7)

    try {
        const returnRetrieve = (error, posts) => {
            if (error) {
                res.status(500)
                res.json({ error: error.message })

                return
            }

            res.json(posts)
        }
        retrievePosts(userId, returnRetrieve)
    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}