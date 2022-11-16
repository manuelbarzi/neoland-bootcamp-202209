const registerUser = require('../logic/registerUser')

module.exports = (req, res) => {
    let { name, email, password } = req.body

    try {
        const errorUserCreation = error => {
            if (error) {
                res.status(500)
                res.json({ error: error.message })

                return
            }

            res.status(201).send()
        }
        registerUser(name, email, password, errorUserCreation)

    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}