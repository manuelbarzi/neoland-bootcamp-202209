const getOpenOnePost = require('../logic/getOpenOnePost')

module.exports = (req, res) => {
    const { params: { postId } } = req

    try {

        getOpenOnePost(postId)
            .then(post => res.json(post))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}