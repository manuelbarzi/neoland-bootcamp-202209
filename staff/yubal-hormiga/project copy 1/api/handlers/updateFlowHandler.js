const updateFlow = require('../logic/updateFlow')

module.exports = (req, res) => {
    try {
        const { body: { type, kind, description, amount, date }, params: { flowId }, userId } = req

        updateFlow(userId, type, kind, description, amount, date, flowId)
            .then(() => res.status(201).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
