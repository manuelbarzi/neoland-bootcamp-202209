const authenticateUser = require('../logic/authenticateUser')
const jwt = require('jsonwebtoken')

const { JWT_SECRET, JWT_EXPIRATION } = process.env

module.exports = (req, res) => {
    try {
        let { email, password } = req.body

        authenticateUser(email, password)
            .then(userId => {
                const payload = { sub: userId }

                const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRATION })

                res.json({ token })
            })
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}