const updateUserPassword = require ('../logic/updateUserPasword')

module.exports = (req, res) => {
    try{
        const { body: { password, newPassword }, userId } = req

        updateUserPassword(userId, password, newPassword)
            .then(() => res.status(204).send())
            .catch(error => res.status (500).json({ error: error.message }))
            // TODO: ampliar errores

    } catch (error){
        res.status(500).json({ error: error.message })
    }
}