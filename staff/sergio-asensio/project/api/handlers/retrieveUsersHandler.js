const retrieveUsers= require('../logic/retrieveUsers')

module.exports = (req, res) => {
    try {
        const { userId } = req

        retrieveUsers(userId)
            .then(users => res.json(users))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}