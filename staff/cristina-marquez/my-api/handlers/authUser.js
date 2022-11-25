const authenticateUser = require('../logic/authenticateUser')

module.exports = async (req, res) => {
    let { email, password } = req.body

    try {
        const dbUser = await authenticateUser(email, password)
        res.status(200).send({ _id: dbUser._id, email: dbUser.email, name: dbUser.name })

    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}
