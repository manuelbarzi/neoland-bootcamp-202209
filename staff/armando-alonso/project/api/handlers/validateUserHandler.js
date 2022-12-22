const validateUser = require('../logic/validateUser')

module.exports = (req, res) => {
    let { email, password } = req.body

    try {
        validateUser(email, password)
            .then(userId => res.json({ userId }))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}