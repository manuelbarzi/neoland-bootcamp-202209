const retrieveNotices = require('../logic/retrieveNotices')

module.exports = (req, res) => {
    try {
        const { userId } = req
    
        retrieveNotices(userId)
            .then(notices => res.json(notices))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}