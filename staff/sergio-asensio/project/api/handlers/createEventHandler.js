const createEvent = require('../logic/createEvent')

module.exports = (req, res) => {
    try {
        const { body: {month, title, body, requeriment, capacity, date , inscription, img }, userId } = req

        createEvent(userId,month, title, body, requeriment, capacity, date, inscription, img)
            .then(() => res.status(201).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
// new Date(date)