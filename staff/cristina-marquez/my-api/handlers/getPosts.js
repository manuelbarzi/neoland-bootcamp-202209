const getPosts = require('../logic/getPosts')

module.exports = async (req, res) => {
    const userId = req.user.id

    try {
        const posts = await getPosts(userId)
        res.status(200).send(posts)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}