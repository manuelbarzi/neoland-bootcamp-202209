// 4. Capturamos los parametros que nos pasa el index.js (API) y la pasamos a su lógica de Register (API)

const registerUser = require('../logic/registerUser')

module.exports = (req, res) => {
    let { name, email, password } = req.body

    try {
        const userCreation = (error, userId) => {
            if (error) {
                res.status(500)
                res.json({ error: error.message })

                return
            }
            res.json({ userId })
            res.status(201).send()
        }
        registerUser(name, email, password, userCreation)

    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}