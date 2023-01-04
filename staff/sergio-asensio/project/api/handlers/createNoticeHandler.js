const createNotice = require('../logic/createNotice')

module.exports = (req, res) => {
    try {
        const { body: { title, body }, userId } = req

        createNotice(userId, title, body)
            .then(() => res.status(201).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}