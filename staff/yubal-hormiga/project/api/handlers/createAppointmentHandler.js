const createAppointment = require('../logic/createAppointment')

module.exports = (req, res) => {
    try {
        const { body: { title, body, date}, userId } = req

        createAppointment(userId, title, body, new Date(date))
            .then(() => res.status(201).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
