const retrieveVehicles = require('../logic/retrieveVehicles')

module.exports = (req, res) => {
    try{
        const {params: { vehicleId }, userId } = req

        retrieveVehicles(userId, vehicleId)
            .then(vehicle => res.json(vehicle))
            .catch(error => res.status(500).json({ error: error.message }))
    } catch(error) {
        res.status(500).json({ error: error.message })
    }
}