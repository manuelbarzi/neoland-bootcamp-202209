const { User, Vehicle } = require('../models')
const { regex: {
    IS_ALPHABETICAL_REGEX
}, errors: {
    NotFoundError, LengthError, FormatError }
} = require('com')

module.exports = function (userId, vehicleId, brand, model, fuelType, license, licenseDate, kms, lastOilCheckDate, lastOilCheckKms,
    lastItvDate, tyrePressureFront, tyrePressureRear) {

    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new LengthError('userId is empty')

    if (typeof vehicleId !== 'string') throw new TypeError('vehicleId is not a string')
    if (!vehicleId.length) throw new LengthError('vehicleId is empty')

    if (typeof brand !== 'string') throw new TypeError('brand is not a string')
    if (!brand.length) throw new LengthError('brand is empty')

    if (typeof model !== 'string') throw new TypeError('model is not a string')
    if (!model.length) throw new LengthError('model is empty')

    if (typeof fuelType !== 'string') throw new TypeError('fuel type is not a string')
    if (!fuelType.length) throw new LengthError('fuel type is empty')
    if (!IS_ALPHABETICAL_REGEX.test(fuelType)) throw new FormatError('fuel type is not alphabetical')

    if (typeof license !== 'string') throw new TypeError('license is not a string')
    if (!license.length) throw new TypeError('license is not a string')
    if (license.length > 7) throw new FormatError('license not granted')

    if (!(licenseDate instanceof Date)) throw new TypeError('licenseDate is not a date')

    if (typeof kms !== 'number') throw new TypeError('kms is not a number')

    if (!(lastOilCheckDate instanceof Date)) throw new TypeError('last oil check date is not a Date')

    if (typeof lastOilCheckKms !== 'number') throw new TypeError('last oil check kms is not a number')

    if (!(lastItvDate instanceof Date)) throw new TypeError('last itv date is not a Date')

    if (typeof tyrePressureFront !== 'string') throw new TypeError('tyre pressure front is not a string')
    if (!tyrePressureFront.length) throw new LengthError('tyre pressure front is empty')

    if (typeof tyrePressureRear !== 'string') throw new TypeError('tyre pressure rear is not a string')
    if (!tyrePressureRear.length) throw new LengthError('tyre pressure rear is empty')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Vehicle.findById(vehicleId)
        })
        .then(vehicle => {
            if (!vehicle) throw new NotFoundError(`vehicle with id ${vehicleId} does not exist`)

            const data = { brand, model, fuelType, license, licenseDate: new Date(licenseDate), kms, lastOilCheckDate: new Date(lastOilCheckDate),
                 lastOilCheckKms, lastItvDate: new Date(lastItvDate), tyrePressureFront, tyrePressureRear }

            return Vehicle.updateOne({ _id: vehicleId }, { $set: data })
        })
}