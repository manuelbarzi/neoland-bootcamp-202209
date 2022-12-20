const { NotFoundError } = require('com/errors')
const {
    errors: { FormatError, LengthError},
    regex: { HAS_SPACES_REGEX}
} = require('../../com')
const {User} = require('../models')

module.exports = function(userId, password) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new LengthError('userId is empty')

    if (typeof password !== 'string') throw new TypeError('password is not a string')
    if (password.length < 8) throw new LengthError('password length is less than 8')
    if (HAS_SPACES_REGEX.test(password)) throw new FormatError('password has spaces')

    return User.findById(userId)
    .then(user => {
        if(!user)
        throw new NotFoundError(`user with id ${userId} does not exist`)

        return User.updateOne({_id: userId}, {$set: {password}}).lean()
    })
}