const retrieveFlow = require('../logic/retrieveFlow')

module.exports = (req, res) => {
    try {
        const { params: { flowId }, userId } = req
    
        retrieveFlow(userId, flowId)
        .then(flow => res.json(flow))
        .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}