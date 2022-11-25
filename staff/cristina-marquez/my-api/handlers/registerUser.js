const registerUser = require('../logic/registerUser')

module.exports = async (req, res) => {
    let { name, email, password } = req.body

    try {
        const newUserId = await registerUser(name, email, password)
        res.status(201).send({ _id: newUserId, name, email })

    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}