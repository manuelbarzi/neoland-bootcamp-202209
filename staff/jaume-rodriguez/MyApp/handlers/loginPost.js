const authenticateUser = require('../logic/authenticateUser')

module.exports = (req, res) => {
    const { email, password } = req.body;
    try {
        const userFind = (error, user) => {
            if (error) {
                res.status(500)
                res.send(error.message)

                return
            }

            res.setHeader('set-cookie', `id=${user.id}`)
            res.redirect('/')
        }
        authenticateUser(email, password, userFind)

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}