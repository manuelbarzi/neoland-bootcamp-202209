const updateTaskText = require('../logic/updateTaskText')

module.exports = (req, res) => {
    const { body: { newText }, headers: { authorization }, params: { taskId } } = req

    const userId = authorization.substring(7)

    try {
        updateTaskText(userId, taskId, newText)
            .then(() => res.status(204).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}