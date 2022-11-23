const authenticateUser = require('../logic/authenticateUser')


module.exports = (req, res) => {
    let { email, password } = req.body

    try {
        authenticateUser(email, password, (error, userId) => {
            if (error) {
                if (error.message === 'user dont found') {
                    res.status(404).json({ error: error.message })
                } else if (error.message === 'wrong password') {
                    res.status(401).json({ error: error.message })
                } else {
                    res.status(500).json({ error: 'server error' })
                }

                return
            }

            // res.setHeader('Content-Type', 'application/json')
            // res.send(JSON.stringify({ userId }))
            res.json({ userId })
        })
    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}