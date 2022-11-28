const updateTaskTitle = require('../logic/updateTaskTitle')

module.exports = (req, res) => {
    let { userId, taskId, newTitle } = req.body

    try {
        const errorUpdateTaskTitle = (error) => {
            if (error) {
                res.status(500)
                res.json({ error: error.message })

                return
            }
            res.status(201).send()
        }
        updateTaskTitle(userId, taskId, newTitle, errorUpdateTaskTitle)

    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}