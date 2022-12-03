const createPost = require('../logic/createPost')
const jwt = require('jsonwebtoken')

const { JWT_SECRET } = process.env

module.exports = (req, res) => {
    try {
        const { body: { text, visibility }, headers: { authorization } } = req

        const token = authorization.substring(7)

        const payload = jwt.verify(token, JWT_SECRET)

        const { sub: userId } = payload

        createPost(userId, text, visibility)
            .then(() => res.status(201).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}