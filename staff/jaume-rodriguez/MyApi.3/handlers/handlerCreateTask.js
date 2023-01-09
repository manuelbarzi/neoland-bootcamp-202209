const createTask = require('../logic/createTask')

module.exports = (req, res) => {
    let { userId, statusTask } = req.body

    try {
        const errorCreation = (error) => {
            if (error) {
                res.status(500)
                res.json({ error: error.message })

                return
            }
            res.status(201).send()
        }
        createTask(userId, statusTask, errorCreation)

    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}