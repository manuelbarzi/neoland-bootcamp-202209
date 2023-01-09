const updateUserName = require('../logic/updateUserName')

module.exports = (req, res) => {
    let { newName, userId } = req.body

    try {
        const errorUpdate = (error) => {
            if (error) {
                res.status(500)
                res.json({ error: error.message })

                return
            }
            res.status(201).send()
        }
        updateUserName(newName, userId, errorUpdate)

    } catch (error) {
        res.status(500)
        res.json({ error: error.message })
    }
}