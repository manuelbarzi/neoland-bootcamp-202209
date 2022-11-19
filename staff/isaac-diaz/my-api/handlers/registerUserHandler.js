const registerUser = require('../logic/registerUser')

module.exports = (req, res) => {
    const body = req.body

    const { name, email, password } = body

    try {
        registerUser(name, email, password, error => {
            if (error) {
                res.status(500)
                res.send(error.message)

                return
            }

            res.status(200).send()
        })
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}