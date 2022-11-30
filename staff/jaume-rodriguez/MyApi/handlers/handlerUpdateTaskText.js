const updateTaskText = require('../logic/updateTaskText')

module.exports = (req, res) => {
    try {
        const { body: { newText }, userId, params: { taskId } } = req

        updateTaskText(userId, taskId, newText)
            .then(() => res.status(204).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}