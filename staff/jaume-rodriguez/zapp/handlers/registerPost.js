const registerUser = require('../logic/registerUser')

module.exports = (req, res) => {
    const { name, email, password } = req.body;
    try {
        registerUser(name, email, password, error => {
            if (error) {
                res.status(500)
                res.send(error.message)

                return
            }
            res.redirect('/login')
        })
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}