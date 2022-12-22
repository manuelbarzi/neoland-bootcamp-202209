const getPublicSanidadPosts = require('../logic/getPublicSanidadPosts')

module.exports = (req, res) => {
    const { headers: { authorization } } = req

    const userId = authorization.substring(7)

    try {
        getPublicSanidadPosts(userId)
            .then(posts => res.json(posts))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

