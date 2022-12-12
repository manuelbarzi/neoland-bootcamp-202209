const retrieveLists = require('../logic/retrieveLists')

module.exports = (req, res) => {
    try {
        const { userId } = req
    
        retrieveLists(userId)
            .then(lists => res.json(lists))
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