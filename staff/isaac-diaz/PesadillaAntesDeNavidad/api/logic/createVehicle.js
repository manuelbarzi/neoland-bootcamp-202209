const {
    errors: {
        LengthError, FormatError, NotFoundError, ConflictError, UnexpectedError
    },
    regex: {
        IS_ALPHABETICAL_REGEX
    }
} = require('com')
const { User, Vehicle } = require('../models')


function createVehicle(userId, brand, model, type, license, licenseDate, kms) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new LengthError('userId is empty')

    if (typeof brand !== 'string') throw new TypeError('brand is not a string')
    if (!brand.length) throw new LengthError('brand is empty')

    if (typeof model !== 'string') throw new TypeError('model is not a string')
    if (!model.length) throw new LengthError('model is empty')

    if (typeof type !== 'string') throw new TypeError('type is not a string')
    if (!type.length) throw new LengthError('type is empty')
    if (!IS_ALPHABETICAL_REGEX.test(type)) throw new FormatError('type is not alphabetical')

    if (typeof license !== 'string') throw new TypeError('license is not a string')
    if (!license.length) throw new TypeError('license is empty')
    if (license.length > 7) throw new FormatError('license not granted')

    if (!licenseDate instanceof Date) throw new TypeError('licenseDate is not a date')

    if (typeof kms !== 'string') throw new TypeError('kms is not a string')
    if (!kms.length) throw new LengthError('kms is empty')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} not found`)

            const vehicle = { user: userId, brand, model, type, license, licenseDate, kms }
            debugger
            //TODO licenseDate need arrive date format...
            return Vehicle.create(vehicle)               

                .catch(error => {
                    if (error.message.includes('E11000'))
                        throw new ConflictError(`vehicle with license ${license} already exist`)
                    throw new UnexpectedError(error.message)
                })
        })
}

module.exports = createVehicle