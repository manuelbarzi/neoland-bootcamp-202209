const updateUserRole = require('../logic/updateUserRole')

module.exports = (req, res) => {
    try {

        const { body: { role }, params:   { user }, userId } = req
        
        updateUserRole(userId, user, role )
            .then(() => res.status(204).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}