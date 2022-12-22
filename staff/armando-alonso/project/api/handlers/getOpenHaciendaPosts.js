const getOpenHaciendaPosts = require('../logic/getOpenHaciendaPosts')

module.exports = (req, res) => {
    try {
        getOpenHaciendaPosts()
            .then(posts => res.json(posts))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

