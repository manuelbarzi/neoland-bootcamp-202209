const registerUser = require('../logic/registerUser')
const jwt = require('jsonwebtoken')

module.exports = async (req, res) => {

    try {
        const newUser = await registerUser(req.body)

        const tokenSecret = process.env.JWT_SECRET;
        const tokenPayload = {
            sub: newUser._id,
            name: newUser.name,
            email: newUser.email
        }

        const userToken = jwt.sign(tokenPayload, tokenSecret, { expiresIn: '7d' })


        res.status(201).send({ token: userToken })

    } catch (error) {
        console.log(error)
        res.status(500)
        res.json({ error: error.message })
    }
}