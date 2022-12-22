const retrieveAUser = require('../logic/retrieveAUser')
const { errors: { NotFoundError, FormatError, LengthError } } = require('com')

module.exports = (req, res) => {
    try {
        const { params: { targetUserId }, userId } = req

        retrieveAUser(userId, targetUserId)
            .then(user => res.json(user))
            .catch(error => {
                if (error instanceof NotFoundError)
                    res.status(404).json({ error: error.message })
                else
                    res.status(500).json({ error: error.message })
            })
    } catch (error) {
        if (error instanceof TypeError ||
            error instanceof FormatError ||
            error instanceof LengthError)

            res.status(400).json({ error: error.message })
        else
            res.status(500).json({ error: error.message })
    }
}