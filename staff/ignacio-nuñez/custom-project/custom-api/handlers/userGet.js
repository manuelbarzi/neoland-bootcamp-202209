const returnUser = require('../logic/returnUser')

module.exports = (req, res) => {
    try {
    const { userId } = req

        returnUser(userId)
            .then(name => res.json({ name }))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}