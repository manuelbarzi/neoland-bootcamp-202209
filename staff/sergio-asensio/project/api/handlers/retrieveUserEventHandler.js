const retrieveUserEvent = require('../logic/retrieveUserEvent')

module.exports = (req, res) => {
    try {
        const {  params:  { user }, userId } = req
        
        retrieveUserEvent(userId, user)
            .then(() => res.status(204).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}