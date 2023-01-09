const registerUser = require('../logic/registerUser')
const jwt = require('jsonwebtoken')
const { JWT_SECRET, JWT_EXPIRATION } = process.env
const { errors: { FormatError, LengthError, ConflictError } } = require('mycommons')

module.exports = (req, res) => {
    const { name, email, password } = req.body

    try {
        registerUser(name, email, password)
            .then(userId => {
                const payload = { sub: userId }
                const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRATION })
                res.status(201).json({ token })
            })
            .catch(error => {
                if (error instanceof ConflictError)
                    res.status(409).json({ error: error.message })
                else
                    res.status(500).json({ error: error.message })
            })
    } catch (error) {
        if (error instanceof TypeError ||
            error instanceof FormatError ||
            error instanceof LengthError)

            res.status(400).json({ error: error.message })
        else
            res.status(500).json({ error: error.message })
    }
}