const retrieveAppointments = require('../logic/retrieveAppointments')

module.exports = (req, res) => {
    try {
        const { userId } = req
    
        retrieveAppointments(userId)
        .then(appointments => res.json(appointments))
        .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}