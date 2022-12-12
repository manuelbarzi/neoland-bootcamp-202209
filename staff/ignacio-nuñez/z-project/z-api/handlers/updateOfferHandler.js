const updateOffer = require('../logic/updateOffer')

const { errors: { FormatError, LengthError, ConflictError, NotFoundError } } = require('com')

module.exports = (req, res) => {
    try {
        const { userId, params: { offerId }, body:{title, description, photo, languages, studies, experiences, knowledges, published} } = req

        updateOffer(userId, offerId, title, description, photo, languages, studies, experiences, knowledges, published)
            .then(() => res.status(202).send())
            .catch(error => {
                if (error instanceof ConflictError) res.status(409).json({ error: error.message })
                else if(error instanceof NotFoundError) res.status(404).json({error:error.message})
                else res.status(500).json({ error: error.message })
            })
    } catch (error) {
        if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
            res.status(400).json({ error: error.message })
        else
            res.status(500).json({ error: error.message })
    }
}