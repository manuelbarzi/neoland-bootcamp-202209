const retrieveEvents= require('../logic/retrieveEvents')

module.exports = (req, res) => {
    try {
        const { userId } = req

        retrieveEvents(userId)
            .then(events => res.json(events))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}