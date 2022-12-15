const retrieveProducts = require('../logic/retrieveProducts')
const { errors: {NotFoundError, FormatError, TypeError } } = require('com')

module.exports = (req, res) => {
    try {
        const { query: { listId } } = req
    
        retrieveProducts(listId)
            .then(items => res.json(items))
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