const updateTaskTitle = require('../logic/updateTaskTitle')

module.exports = (req, res) => {
    const { body: { newTitle }, headers: { authorization }, params: { taskId } } = req

    const userId = authorization.substring(7)

    try {
        updateTaskTitle(userId, taskId, newTitle)
            .then(() => res.status(204).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}