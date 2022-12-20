const attack1 = require('../logic/attack1')
const { errors: { FormatError, NotFoundError } } = require('com')

module.exports = (req, res) => {
    try {
        const { userId } = req
        const { index } = req.body

        attack1(userId, index)
            .then(user => res.json(user))
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