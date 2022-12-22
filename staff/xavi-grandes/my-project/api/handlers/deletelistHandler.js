const deleteList = require('../logic/deleteList')

module.exports = (req, res) => {
    try {
        const { params: { listId }, userId } = req
    
        deleteList(userId, listId)
            .then(() => res.status(204).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}