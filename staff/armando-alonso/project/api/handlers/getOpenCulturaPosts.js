const getOpenCulturaPosts = require('../logic/getOpenCulturaPosts')

module.exports = (req, res) => {
    try {
        getOpenCulturaPosts()
            .then(posts => res.json(posts))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

