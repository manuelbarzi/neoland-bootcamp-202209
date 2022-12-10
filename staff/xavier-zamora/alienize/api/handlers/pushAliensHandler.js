const pushAliens = require('../logic/pushAliens')
const { errors: { FormatError, NotFoundError } } = require('com')

module.exports = (req, res) => {
    const {gameId} = req.body
    try {
        pushAliens(gameId)
            .then(game => res.json(game))
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