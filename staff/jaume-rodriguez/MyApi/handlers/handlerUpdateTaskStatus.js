const updateTaskStatus = require('../logic/updateTaskStatus')

module.exports = (req, res) => {
    let { userId, taskId, newStatus } = req.body

    try {
        const errorStatusUpdate = (error) => {
            if (error) {
                res.status(500)
                res.json({ error: error.message })

                return
            }
            res.status(201).send()
        }
        updateTaskStatus(userId, taskId, newStatus, errorStatusUpdate)

    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}