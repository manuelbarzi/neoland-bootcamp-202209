const retrieveVehicle = require('../logic/retrieveVehicle')

module.exports = (req, res) => {
    try {
        const { params: { vehicleId }, userId } = req

        retrieveVehicle(userId, vehicleId)
            .then(vehicle => res.json(vehicle))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}