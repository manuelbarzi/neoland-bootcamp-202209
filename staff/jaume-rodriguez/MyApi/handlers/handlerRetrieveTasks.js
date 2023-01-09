const retrieveTasks = require('../logic/retrieveTasks')

module.exports = (req, res) => {
    try {
        const { userId } = req

        retrieveTasks(userId)
            .then(tasks => {
                res.json(tasks)
            })
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}