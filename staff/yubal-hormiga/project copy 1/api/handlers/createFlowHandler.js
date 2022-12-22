const createFlow = require('../logic/createFlow')

module.exports = (req, res) => {
    try {
        const { body: { type, kind, description, amount, date }, userId } = req

        createFlow(userId, type, kind, description, amount, new Date(date))
            .then(() => res.status(201).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
