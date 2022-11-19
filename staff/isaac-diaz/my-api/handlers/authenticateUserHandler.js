const authenticateUser = require('../logic/authenticateUser')

module.exports = (req, res) => {
    let { email, password } = req.body

    try{ 
        authenticateUser(email, password, (error, userId) => {
            if(error) {
            res.status(500)
            res.json({ error: error.message })
        
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