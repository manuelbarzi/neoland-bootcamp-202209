const validateUser = require('../logic/validateUser')

module.exports = async (req, res) => {
    let { email, password } = req.body

    try {
        const userId = await validateUser(email, password)
        res.status(201).send({ userId })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}