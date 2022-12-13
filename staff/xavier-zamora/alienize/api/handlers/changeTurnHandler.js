const changeTurn = require('../logic/changeTurn')
const { errors: { FormatError, NotFoundError} } = require('com')

module.exports = (req, res) => {
    const {userId} = req

    try{
        changeTurn(userId)
        .then(hasTurn => res.json(hasTurn))
        .catch(error => {
            if(error instanceof NotFounError)
            res.status(404).json({ error: error.message })
            else
                res.status(500).json({ error: error.message })
            })
    }catch(error){
        if (error instanceof TypeError || error instanceof FormatError)
            res.status(400).json({ error: error.message })
        else
            res.status(500).json({ error: error.message })
    }
} 