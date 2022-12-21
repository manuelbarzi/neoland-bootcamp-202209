const updateUserEmail = require('../logic/updateUserEmail')

module.exports = (req, res) => {
    try {
        const { body: { newEmail }, userId } = req

        updateUserEmail(userId, newEmail)
            .then(() => res.status(204).send())
            .catch(error => res.status(500).json({ error: error.message }))

    } catch (error){
        res.status(500).json({ error: error.message })
    }
}