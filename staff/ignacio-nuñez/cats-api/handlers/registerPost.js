const registerUser = require('../logic/registerUser')


module.exports = (req, res) => {
    let { name, email, password } = req.body

    try {
        registerUser(name, email, password, (error, status) => {
            if (error) {
                res.status(status)
                res.json({ error: error.message })
                return
            }
           
            res.status(status).send()
        })
    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}