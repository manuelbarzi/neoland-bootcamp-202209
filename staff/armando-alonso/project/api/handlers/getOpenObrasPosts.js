const getOpenObrasPosts = require('../logic/getOpenObrasPosts')

module.exports = (req, res) => {
    try {
        getOpenObrasPosts()
            .then(posts => res.json(posts))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

