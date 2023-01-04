const updateEvent = require('../logic/updateEvent')

module.exports = (req, res) => {
    try {
        const { body: { title, body, requirement, capacity, date , inscription, image }, params:   { eventId }, userId } = req
        
        updateEvent(userId, eventId, title, body, requirement, capacity, date , inscription, image )
            .then(() => res.status(204).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}