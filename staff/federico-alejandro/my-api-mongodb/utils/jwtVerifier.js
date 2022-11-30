const jwt = require('jsonwebtoken')

const { JWT_SECRET } = process.env

module.exports = (req, res, next) => {
    try {
        const { headers: { authorization } } = req

        const token = authorization.substring(7)

        const payload = jwt.verify(token, JWT_SECRET)
    //verify -> verifica que token y palabra secreta conincidan, de lo contrario error
        const { sub: userId } = payload

        req.userId = userId

        next()
    } catch (next) {
        res.status(500).json({ error: error.message })
    }
}