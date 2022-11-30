const registerUser = require('../logic/registerUser')
const jwt = require('jsonwebtoken')
const { JWT_SECRET, JWT_EXPIRATION } = process.env

module.exports = (req, res) => {
    const { name, email, password } = req.body

    try {
        registerUser(name, email, password)
            .then(userId => {
                const payload = { sub: userId }
                const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRATION })
                res.status(201).json({ token })
            })
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}