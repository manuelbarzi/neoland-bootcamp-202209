const updateUserPassword = require('../logic/updateUserPassword')

module.exports = (req, res) => {
    let { newPassword, userId } = req.body

    try {
        const errorUpdate = (error) => {
            if (error) {
                res.status(500)
                res.json({ error: error.message })

                return
            }
            res.status(201).send()
        }
        updateUserPassword(newPassword, userId, errorUpdate)

    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}