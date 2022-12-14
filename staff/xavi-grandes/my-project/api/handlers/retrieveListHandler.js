const retrieveList = require('../logic/retrieveList')

module.exports = (req, res) => {
    try {
        const { query: { title }, userId } = req
    
        retrieveList(userId, title)
            .then(list => res.json(list))
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