const retrieveTasks = require('../logic/retrieveTasks')

module.exports = (req, res) => {
    const { headers: { authorization } } = req

    const userId = authorization.substring(7)

    try {
        const returnRetrieve = (error, tasks) => {
            if (error) {
                res.status(500)
                res.json({ error: error.message })

                return
            }

            res.json(tasks)
        }
        retrieveTasks(userId, returnRetrieve)
    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}