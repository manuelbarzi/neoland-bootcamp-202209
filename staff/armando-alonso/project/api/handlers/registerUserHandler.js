const registerUser = require('../logic/registerUser')

module.exports = (req, res) => {
    const { name, surname, direction, postal, barrio, email, password, role } = req.body

    try {
        registerUser(name, surname, direction, postal, barrio, email, password, role)
                .then(() => res.status(201).send())
                .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
 