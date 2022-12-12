const updateEvent = require('../logic/updateEvent')

module.exports = (req, res) => {
    try {
        const { body: { title, body, requeriment, capacity, date , inscription, img }, params:   { eventId }, userId } = req
        
        updateEvent(userId, eventId, title, body, requeriment, capacity, date , inscription, img )
            .then(() => res.status(204).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}