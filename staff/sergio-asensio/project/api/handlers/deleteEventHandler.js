const deleteEvent= require('../logic/deleteEvent')

module.exports = (req, res) => {
    try {
        const { params: { eventId: eventId }, userId } = req

        deleteEvent(userId, eventId)
            .then(() => res.status(204).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}