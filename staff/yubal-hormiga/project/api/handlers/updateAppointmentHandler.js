const updateAppointment = require('../logic/updateAppointment')

module.exports = (req, res) => {
    try {
        const { body: { title, body, date }, params: { appointmentId }, userId } = req

        updateAppointment(userId, title, body, date, appointmentId)
            .then(() => res.status(201).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
