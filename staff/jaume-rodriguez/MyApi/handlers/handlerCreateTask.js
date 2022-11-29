const createTask = require('../logic/createTask')

module.exports = (req, res) => {
    const { body: { statusTask }, headers: { authorization } } = req

    const userId = authorization.substring(7)

    try {
        createTask(userId, statusTask)
            .then(() => res.status(201).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}