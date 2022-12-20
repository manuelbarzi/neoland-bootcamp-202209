const { User, Vehicle } = require('../models')
const { errors: { LengthError, NotFoundError } } = require('com')

module.exports = function (userId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new LengthError('userId is empty')

    // if (typeof vehicleId !== 'string') throw new TypeError('vehicleId is not a string')
    // if (!vehicleId.length) throw new LengthError('vehicleId is empty')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            // return Vehicle.find(vehicleId)

            return Vehicle.find({ user: userId }).lean()

            // delete vehicle._id
            // delete vehicle.__v
            // delete vehicle.user
            // return vehicle
        })
        .then(vehicles => {
            vehicles.forEach(vehicle => {
                vehicle.id = vehicle._id.toString()

                delete vehicle._id
                delete vehicle.__v
                delete vehicle.user
            })

            return vehicles
        })
    // .then(vehicle => {
    //     if (!vehicle) throw new Error(`vehicle with id ${vehicleId} does not exist`)

    //     if (vehicle.user.toString() !== userId) throw AuthError(`vehicle with id ${vehicleId} does not belong to user with id ${userId}`)

    // })
}