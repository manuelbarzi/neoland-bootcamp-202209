const registerUser = require('../logic/registerUser')

module.exports = async (req, res) => {
    try {
        const { name, surname, direction, postal, barrio, email, password } = req.body

        const regis = await registerUser(name, surname, direction, postal, barrio, email, password)
            res.status(201).send({ _id: regis, name, surname, direction, postal, barrio, email })
    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}
