const deleteTask = require('../logic/deleteTask')

module.exports = (req, res) => {
    let { userId, taskId } = req.body

    try {
        const errorDelete = (error) => {
            if (error) {
                res.status(500)
                res.json({ error: error.message })

                return
            }
            res.status(201).send()
        }
        deleteTask(userId, taskId, errorDelete)

    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}