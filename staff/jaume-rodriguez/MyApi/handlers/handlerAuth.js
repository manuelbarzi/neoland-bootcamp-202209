const authenticateUser = require('../logic/authenticateUser')

module.exports = (req, res) => {
    let { email, password } = req.body

    try {
        const indentifiedUser = (error, userId, userName) => {
            if (error) {
                res.status(500)
                res.json({ error: error.message })

                return
            }
            res.json({ userId, userName })
        }
        authenticateUser(email, password, indentifiedUser)

    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}