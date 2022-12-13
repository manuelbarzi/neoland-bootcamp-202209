const { User, Vehicle } = require('../models')
const { regex: {
    IS_ALPHABETICAL_REGEX
}, errors: { NotFoundError, LengthError, FormatError} } = require('com')

module.exports = function (userId, vehicleId, brand, model, type, license, licenseDate, kms) {
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

    if (typeof license !== 'string') throw new TypeError('license is not a string')
    if (!license.length) throw new TypeError('license is not a string')
    if (license.length > 7) throw new FormatError('license not granted')

    if (typeof licenseDate !== 'string') throw new TypeError('licenseDate is not a string')
    if (!licenseDate.length) throw new LengthError('licenseDate is empty')

    if (typeof kms !== 'string') throw new TypeError('kms is not a string')
    if (!kms.length) throw new LengthError('kms is empty')



    return User.findById(userId)
        .then(user => {
            if(!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Vehicle.find({ user: userId })
        })
        .then(vehicle => {
            if(!vehicle) throw new NotFoundError(`vehicle with id ${vehicleId} does not exist`)

            return Vehicle.updateOne({_id: vehicleId }, { $set: { brand, model, type, license, licenseDate: new Date(licenseDate), kms} })
        })
}