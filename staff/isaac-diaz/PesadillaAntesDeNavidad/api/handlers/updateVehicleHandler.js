const updateVehicle = require('../logic/updateVehicle')

module.exports = (req, res) => {
    try {
        const { body: { brand, model, type, lisence, lisenceDate, kms }, userId, params: { vehicleId } } = req

        updateVehicle(userId, vehicleId, brand, model, type, lisence, lisenceDate, kms)
            .then(() => res.status(204).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}