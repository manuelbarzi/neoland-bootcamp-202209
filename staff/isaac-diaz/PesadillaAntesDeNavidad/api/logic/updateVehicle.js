const { Users, Vehicles } = require('../models')

module.exports = function (userId, vehicleId, brand, model, type, lisence, lisenceDate, kms) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new LengthError('userId is empty')

    if (typeof vehicleId !== 'string') throw new TypeError('vehicleId is not a string')
    if (!vehicleId.length) throw new LengthError('vehicleId is empty')

    if (typeof brand !== 'string') throw new TypeError('brand is not a string')
    if (!brand.length) throw new LengthError('brand is empty')

    if (typeof model !== 'string') throw new TypeError('model is not a string')
    if (!model.length) throw new LengthError('model is empty')

    if (typeof type !== 'string') throw new TypeError('type is not a string')
    if (!type.length) throw new LengthError('type is empty')
    if (!IS_ALPHABETICAL_REGEX.test(type)) throw new FormatError('type is not alphabetical')

    if (typeof lisence !== 'string') throw new TypeError('lisence is not a string')
    if (!lisence.length) throw new TypeError('lisence is not a string')
    if (lisence.length > 7) throw new FormatError('lisence not granted')

    if (typeof lisenceDate !== 'string') throw new TypeError('lisenceDate is not a string')
    if (!lisenceDate.length) throw new LengthError('lisenceDate is empty')

    if (typeof kms !== 'string') throw new TypeError('kms is not a string')
    if (!kms.length) throw new LengthError('kms is empty')



    return Users.findById(userId)
        .then(user => {
            if(!user) throw new Error(`user with id ${userId} does not exist`)

            return Vehicles.find({ user: userId })
        })
        .then(vehicle => {
            if(!vehicle) throw new Error(`vehicle with id ${vehicleId} does not exist`)

            return Vehicles.updateOne((vehicleId), { $set: { brand, model, type, lisence, lisenceDate, kms} })
        })
}