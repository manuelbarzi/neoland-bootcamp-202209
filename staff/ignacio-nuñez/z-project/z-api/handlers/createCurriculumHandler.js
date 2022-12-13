const createCurriculm = require('../logic/createCurriculum')

const { errors: { FormatError, LengthError, NotFoundError, ConflictError } } = require('com')

module.exports = (req, res) => {
    try {
        const { title, description, photo, languages, studies, experiences, knowledges } = req.body
        const { userId } = req

        createCurriculm(userId, title, description, photo, languages, studies, experiences, knowledges)
            .then(() => res.status(201).send())
            .catch(error => {
                if(error instanceof NotFoundError) res.status(404).json({error:error.message})
                else if(error instanceof ConflictError) res.status(409).json({error: error.message})
                else res.status(500).json({ error: error.message })
            })
    } catch (error) {
        if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
            res.status(400).json({ error: error.message })
        else
            res.status(500).json({ error: error.message })
    }
}