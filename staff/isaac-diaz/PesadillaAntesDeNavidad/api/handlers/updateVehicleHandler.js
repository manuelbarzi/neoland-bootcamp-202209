const { errors: { NotFoundError, LengthError, FormatError } } = require('com')
const updateVehicle = require('../logic/updateVehicle')

module.exports = (req, res) => {
    try {
        const { body: { brand, model, type, license, licenseDate, kms }, userId, params: { vehicleId } } = req

        updateVehicle(userId, vehicleId, brand, model, type, license, licenseDate, kms)
            .then(() => res.status(204).send())
            .catch(error => {
                if (error instanceof NotFoundError)
                    res.status(404).json({ error: error.message })
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