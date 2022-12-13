const { errors: { FormatError, LengthError, ConflictError } } = require('../../com')
const retrieveGameData = require('../logic/retrieveGameData')

module.exports = (req, res) => {
    const {userId} = req

    try {
        retrieveGameData(userId)
            .then(gameId =>res.json(gameId))          
            .catch(error => {
                if (error instanceof NotFoundError)
                    res.status(404).json({ error: error.message })
                else if (error instanceof AuthError)
                    res.status(401).json({ error: error.message })
                else
                    res.status(500).json({ error: error.message })
            })
    } catch (error) {
        if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
            res.status(400).json({ error: error.message })
        else
            res.status(500).json({ error: error.message })
    }
}