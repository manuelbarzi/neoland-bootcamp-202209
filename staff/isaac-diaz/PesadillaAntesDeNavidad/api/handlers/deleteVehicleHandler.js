const deleteVehicle = require('../logic/deleteVehicle')

module.exports = (req, res) => {
    try {
        const { params: { vehicleId }, userId } = req

        deleteVehicle(userId, vehicleId)
            .then(() => res.status(204).send())
            .catch(error => res.status(500).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}