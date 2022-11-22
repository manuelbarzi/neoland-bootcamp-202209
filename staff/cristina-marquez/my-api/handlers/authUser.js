const authenticateUser = require('../logic/authenticateUser')

module.exports = (req, res) => {
    let { email, password } = req.body

    try {
        authenticateUser(email, password, (error, user) => {
            if (error) {
                res.status(500)
                res.json({ error: error.message })

                return
            }

            res.json(user)
        })
    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}
