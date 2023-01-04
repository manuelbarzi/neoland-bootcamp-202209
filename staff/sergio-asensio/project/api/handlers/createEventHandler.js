const createEvent = require('../logic/createEvent')

module.exports = (req, res) => {
    try {
        const { body: {title, body, requirement, capacity, date , inscription, image }, userId } = req

        createEvent(userId, title, body, requirement, capacity, date, inscription, image)
            .then(() => res.status(201).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
// new Date(date)