const retrieveUser = require('../logic/retrieveUser')

module.exports = (req, res) => {
    const { headers: { authorization } } = req

    const userId = authorization.substring(7)
    
    try {
        retrieveUser(userId)
            .then(user => res.json(user))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}