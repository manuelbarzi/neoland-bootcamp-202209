const getOpenPosts = require('../logic/getOpenPosts')

module.exports = (req, res) => {


    try {
        getOpenPosts()
            .then(posts => res.json(posts))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

