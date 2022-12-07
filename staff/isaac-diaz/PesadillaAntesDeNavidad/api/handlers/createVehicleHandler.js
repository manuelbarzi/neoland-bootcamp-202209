const createVehicle = require('../logic/createVehicle')
const jwt = require('jsonwebtoken')
const { LengthError, FormatError, NotFoundError } = require('com')

module.exports = (req, res) => {
    try {
        const { body: { brand, model, type, license, lisenceDate, kms }, userId } = req

        createVehicle(userId, brand, model, type, license)
            .then(() => res.status(201).send())
            .catch(error => {
                if (error instanceof NotFoundError)
                    res.status(404).json({ error: error.message })
                else if (error instanceof AuthError)
                    res.status(401).json({ error: error.message })
                else
                    res.status(500).json({ error: error.message })
            })
    } catch (error) {
        if (error instanceof LengthError || error instanceof FormatError)
            res.status(400).json({ error: error.message })
        else
            res.status(500).json({ error: error.message })
    }
}