const { LengthError, FormatError, NotFoundError, AuthError } = require('com')


function createVehicle(userId, vehicleId, brand, model, type, lisence, lisenceDate, kms) {
    if(typeof userId !== 'string') throw new TypeError('userId is not a string')
    if(!userId.length)throw new LengthError('userId is empty')

    if(typeof vehicleId !== 'string') throw new TypeError('vehicleId is not a string')
    if(!vehicleId.length)throw new LengthError('vehicleId is empty')

    if(typeof brand !== 'string')throw new TypeError('brand is not a string')
    if(!brand.length)throw new LengthError('brand is empty')

    if(typeof model !== 'string')throw new TypeError('model is not a string')
    if(!model.length)throw new LengthError('model is empty')

    if(typeof type !== 'string') throw new TypeError('type is not a string')
    if(!type.length)throw new LengthError('type is empty')

    if(typeof lisence !== 'string')throw new TypeError('lisence is not a string')
    if(!lisence.length)throw new TypeError('lisence is not a string')
    if(lisence.length > 7)throw new FormatError('lisence not granted')

    return Users.findOne({ id: ObjectId(userId) }) 
        .then(user => {
            if(!user)
            throw new NotFoundError(`user with id ${userId} not found`)

            const vehicle = { user: ObjectId(userId), vehicleId, brand, model, type, lisence, lisenceDate, kms }

            return vehicles.insertOne(vehicle)
        })
        .then(result => {
            const { acknowledged } = result
            if(!acknowledged) throw new AuthError('could not create vehicle')
        })
}

module.exports = createVehicle