const updateTaskStatus = require('../logic/updateTaskStatus')

module.exports = (req, res) => {
    try {
        const { body: { newStatus }, userId, params: { taskId } } = req

        updateTaskStatus(userId, taskId, newStatus)
            .then(() => res.status(204).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}