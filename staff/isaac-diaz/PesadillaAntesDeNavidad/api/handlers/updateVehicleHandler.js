const updateVehicle = require('../logic/updateVehicle')

module.exports = (req, res) => {
    try {
        const { body: { brand, model, type, license, licenseDate, kms }, userId, params: { vehicleId } } = req

        updateVehicle(userId, vehicleId, brand, model, type, license, licenseDate, kms)
            .then(() => res.status(204).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}