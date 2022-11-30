const registerUser = require('../logic/registerUser')

module.exports = (req, res) => {
    const { name, email, password } = req.body

    try {
        registerUser(name, email, password)
            .then(() => res.status(201).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}