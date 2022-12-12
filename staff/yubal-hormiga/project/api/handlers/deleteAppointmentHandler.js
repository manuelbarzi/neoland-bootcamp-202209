const deleteAppointment = require('../logic/deleteAppointment')

module.exports = (req, res) => {
    try {
        const { params: { appointmentId }, userId } = req

        deleteAppointment(userId, appointmentId)
            .then(() => res.status(204).send())
            .catch(error => res.status(500).json({ error: error.message }))

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
