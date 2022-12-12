const deleteFlow = require('../logic/deleteFlow')

module.exports = (req, res) => {
    try {
    const { params: { flowId }, userId  } = req

        deleteFlow(userId, flowId)
            .then(() => res.status(204).send())
            .catch(error => res.status(500).json({ error: error.message }))

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
