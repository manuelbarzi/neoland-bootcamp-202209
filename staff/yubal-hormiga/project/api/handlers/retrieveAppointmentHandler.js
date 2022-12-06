const retrieveAppointment = require('../logic/retrieveAppointment')

module.exports = (req, res) => {
    try {
        const { params: { appointmentId }, userId } = req
    
        retrieveAppointment(userId, appointmentId)
        .then(appointment => res.json(appointment))
        .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}