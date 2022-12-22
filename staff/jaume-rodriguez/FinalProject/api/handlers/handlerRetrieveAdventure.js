const retrieveAdventure = require('../logic/retrieveAdventure')
const { errors: { NotFoundError, FormatError, LengthError } } = require('com')

module.exports = (req, res) => {
    try {
        const { params: { adventureId }, userId } = req

        retrieveAdventure(userId, adventureId)
            .then(adventure => res.json(adventure))
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