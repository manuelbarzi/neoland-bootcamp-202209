const randomPick = require('../logic/randomPick')
const { errors: { FormatError, NotFoundError } } = require('com')
const { game } = require('../models/schemas')

module.exports = (req, res) => {
    const { userId } = req
    const { gameId } = req.body
    try {
        randomPick(userId, gameId)
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