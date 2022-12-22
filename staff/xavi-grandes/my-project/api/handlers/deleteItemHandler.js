const deleteItem = require('../logic/deleteItem')

module.exports = (req, res) => {
    try {
        const { params: { itemId } } = req
    
        deleteItem(itemId)
            .then(() => res.status(204).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}