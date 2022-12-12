const { errors: { LengthError,  NotFoundError } } = require('../../my-commons')
const { User, Flow } = require('../models')

function createFlow(userId, type, kind, description, amount, date) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new LengthError('userId is empty')
    if (typeof type !== 'string') throw new TypeError('title is not a string')
    if (!type.length) throw new LengthError('title is empty')
   // TODO validate inputs

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

            return Flow.create({ user: userId, type, kind, description, amount, date })
        })
}

module.exports = createFlow