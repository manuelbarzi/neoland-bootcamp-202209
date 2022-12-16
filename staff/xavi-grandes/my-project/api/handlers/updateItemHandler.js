const updateItem = require('../logic/updateItem')

module.exports = (req, res) => {
    try {
        const { body: { title, quantity, amount }, params: { itemId} } = req
    
        updateItem(itemId, title, quantity, amount)
            .then(() => res.status(204).send())
            .catch(error => {
                if (error instanceof NotFoundError)
                    res.status(404).json({ error: error.message })
                else
                    res.status(500).json({ error: error.message })
            })
    } catch (error) {
        if (error instanceof TypeError || error instanceof FormatError)
            res.status(400).json({ error: error.message })
        else
            res.status(500).json({ error: error.message })
    }
}