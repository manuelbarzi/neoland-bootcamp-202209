const retrieveTasks = require('../logic/retrieveTasks')

module.exports = (req, res) => {
    const { headers: { authorization } } = req

    const userId = authorization.substring(7)
    debugger
    try {
        retrieveTasks(userId)
            .then(tasks => {
                res.json(tasks)
            })
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}