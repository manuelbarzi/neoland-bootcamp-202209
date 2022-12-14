const createVehicle = require('../logic/createVehicle')
const { 
    errors: {
        LengthError, FormatError, NotFoundError, AuthError
    }
} = require('com')

module.exports = (req, res) => {
    try {
        const { body: { brand, model, type, license, licenseDate, kms }, userId } = req

        createVehicle(userId, brand, model, type, license, new Date(licenseDate), kms)
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
        if (error instanceof TypeError || error instanceof LengthError || error instanceof FormatError)
            res.status(400).json({ error: error.message })
        else
            res.status(500).json({ error: error.message })
    }
}