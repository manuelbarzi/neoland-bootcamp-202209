const createTask = require('../logic/createTask')

module.exports = (req, res) => {
    try {
        const { body: { statusTask }, userId } = req

        createTask(userId, statusTask)
            .then(() => res.status(201).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}