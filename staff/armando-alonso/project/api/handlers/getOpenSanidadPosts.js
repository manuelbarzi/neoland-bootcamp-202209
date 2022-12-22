const getOpenSanidadPosts = require('../logic/getOpenSanidadPosts')

module.exports = (req, res) => {
    try {
        getOpenSanidadPosts()
            .then(posts => res.json(posts))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

