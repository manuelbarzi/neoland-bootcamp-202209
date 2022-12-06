const updatePost = require('../logic/updateAppointment')

module.exports = (req, res) => {
    try {
        const { body: { title, body}, params: { appointmentId }, userId } = req
    
        updatePost(userId, appointmentId, title, body)
            .then(() => res.status(204).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}