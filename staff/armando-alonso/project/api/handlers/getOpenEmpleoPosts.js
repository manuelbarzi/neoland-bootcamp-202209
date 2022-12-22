const getOpenEmpleoPosts = require('../logic/getOpenEmpleoPosts')

module.exports = (req, res) => {
    try {
        getOpenEmpleoPosts()
            .then(posts => res.json(posts))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

