const retrieveFlows = require('../logic/retrieveFlows')

module.exports = (req, res) => {
    try {
        const { userId } = req
    
        retrieveFlows(userId)
        .then(flows => res.json(flows))
        .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}