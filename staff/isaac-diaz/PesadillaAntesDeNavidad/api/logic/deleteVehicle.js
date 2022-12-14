const { LengthError, NotFoundError } = require('com')
const { User, Vehicle } = require('../models')

module.exports = function (userId, vehicleId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new LengthError('userId is empty')

    if (typeof vehicleId !== 'string') throw new TypeError('vehicleId is not a string')
    if (!vehicleId.length) throw new LengthError('vehicleId is empty')

    return User.findOne({ id: ObjectId(userId) })
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} not found`)
        })
        .then(vehicle => {
            if (!vehicle)
                throw new NotFoundError(`vehicle with id ${vehicleId} not found`)

            return Vehicle.deleteOne(vehicle)
        })        
}