const updateUserEmail = require('../logic/updateUserEmail')

module.exports = (req, res) => {
    let { newEmail, userId } = req.body

    try {
        const errorUpdate = (error) => {
            if (error) {
                res.status(500)
                res.json({ error: error.message })

                return
            }
            res.status(201).send()
        }
        updateUserEmail(newEmail, userId, errorUpdate)

    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}