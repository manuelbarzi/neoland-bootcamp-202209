const retrieveLists = require('../logic/retrieveLists')

module.exports = (req, res) => {
    try {
        const { userId } = req
    
        retrieveLists(userId)
            .then(lists => res.json(lists))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}