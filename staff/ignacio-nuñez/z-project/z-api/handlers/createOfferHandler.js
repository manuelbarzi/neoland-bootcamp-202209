const createOffer = require('../logic/createOffer')

const { errors: { FormatError, LengthError, NotFoundError } } = require('com')

module.exports = (req, res) => {
    try {
        const { title, description, photo, languages, studies, experiences } = req.body
        const { userId } = req

        createOffer(userId, title, description, photo, languages, studies, experiences)
            .then(() => res.status(201).send())
            .catch(error => {
                if(error instanceof NotFoundError) res.status(404).json({error:error.message})
                else res.status(500).json({ error: error.message })
            })
    } catch (error) {
        if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
            res.status(400).json({ error: error.message })
        else
            res.status(500).json({ error: error.message })
    }
}