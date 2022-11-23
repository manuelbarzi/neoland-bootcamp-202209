const registerUser = require('../logic/registerUser')


module.exports = (req, res) => {
    let { name, email, password } = req.body

    try {
        registerUser(name, email, password, error => {
            if (error) {
                if (error.message === 'Email already registered') {
                    res.status(401).json({ error: error.message })
                } else {
                    res.status(500).json({ error: 'server error' })
                }

                return
            }

            res.status(200).send()
        })
    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}