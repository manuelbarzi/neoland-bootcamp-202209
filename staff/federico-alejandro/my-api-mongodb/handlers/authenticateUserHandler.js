const authenticateUser = require('../logic/authenticateUser')
const jwt = require('jsonwebtoken')

const { JWT_SECRET, JWT_EXPIRATION } = process.env

module.exports = (req, res) => {
    let { email, password } = req.body

    try {
        authenticateUser(email, password)
            .then(userId => {
                const payload = { sub: userId }

                const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRATION })
            // expiresIn -> si es numerico se interpreta como un conteo de segundos. 
            //Si usa un string, se debe proporcionar las unidades de tiempo (días, horas, etc.)
                res.json({ token })
            })
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}