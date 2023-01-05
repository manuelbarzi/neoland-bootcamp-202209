const registerUser = require('../logic/registerUser')
const { errors: { FormatError, LengthError, ConflictError } } = require('my-commons')

module.exports = (req, res) => {
    let { name, email, password } = req.body

    try {
        registerUser(name, email, password)
            .then(() => res.status(201).send())
            .catch(error => {
                if (error instanceof ConflictError)
                    res.status(409).json({ error: error.message })
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