const { LengthError } = require('com')
const { Users, Vehicles } = require('../models')


module.exports = function (userId, vehicleId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new LengthError('userId is empty')

    if (typeof vehicleId !== 'string') throw new TypeError('vehiceId is not a string')
    if (!vehicleId.length) throw new LengthError('vehicleId is empty')

    return Users.findById(userId)
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} does not exist`)

            return Vehicles.find({ user: userId })
        })
        .then(vehicle => {
            if (!vehicle) throw new Error(`vehicle with id ${vehicleId} does not exist`)
           
            return vehicle
        })

}