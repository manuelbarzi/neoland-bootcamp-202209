const updateTaskStatus = require('../logic/updateTaskStatus')

module.exports = (req, res) => {
    const { body: { newStatus }, headers: { authorization }, params: { taskId } } = req

    const userId = authorization.substring(7)

    try {
        updateTaskStatus(userId, taskId, newStatus)
            .then(() => res.status(204).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}