const retrieveEvent = require('../logic/retrieveEvent')

module.exports = (req, res) => {
    try {
        const { params: {eventId}, userId } = req
    
        retrieveEvent(userId, eventId)
            .then(event => res.json(event))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}