const { errors: { LengthError, FormatError, NotFoundError, UnexpectedError } } = require('com')
const { User } = require('../models')

module.exports = function (userId, user) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new LengthError('userId is empty')
    if (typeof user !== 'string') throw new TypeError('user is not a string')
    if (!user.length) throw new LengthError('user is empty')

    return User.findById(userId)
        .then(userAdmin => {
            if (!userAdmin)
                throw new NotFoundError(`user with id ${userId} does not exist`)

            return User.findById(user)
        })
        .then(userEvent => {
            if (!userEvent)
                throw new NotFoundError(`user with ${user} does not participate to this event`)


            return userEvent
        })
}