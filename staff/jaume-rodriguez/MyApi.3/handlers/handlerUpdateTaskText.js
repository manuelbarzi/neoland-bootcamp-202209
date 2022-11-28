const updateTaskText = require('../logic/updateTaskText')

module.exports = (req, res) => {
    let { userId, taskId, newText } = req.body

    try {
        const errorUpdateTaskText = (error) => {
            if (error) {
                res.status(500)
                res.json({ error: error.message })

                return
            }
            res.status(201).send()
        }
        updateTaskText(userId, taskId, newText, errorUpdateTaskText)

    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}