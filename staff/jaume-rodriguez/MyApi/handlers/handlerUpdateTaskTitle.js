const updateTaskTitle = require('../logic/updateTaskTitle')

module.exports = (req, res) => {
    try {
        const { body: { newTitle }, userId, params: { taskId } } = req

        updateTaskTitle(userId, taskId, newTitle)
            .then(() => res.status(204).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}