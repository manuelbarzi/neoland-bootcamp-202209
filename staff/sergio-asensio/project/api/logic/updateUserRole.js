const { errors: { LengthError, FormatError, NotFoundError, UnexpectedError } } = require('com')
const { User } = require('../models')

module.exports = function (userId, user, role) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new LengthError('userId is empty')
    if (typeof user !== 'string') throw new TypeError('user is not a string')
    if (!user.length) throw new LengthError('user is empty')
    if (typeof role !== 'string') throw new TypeError('role is not a string')
    if (!role.length) throw new LengthError('role is empty')

    return User.findById(userId)
        .then(userAdmin => {
            if (!userAdmin)
                throw new NotFoundError(`user with id ${userId} does not exist`)
            if (userAdmin.role !== 'admin') throw new Error('user is not able to update a role')

            return User.findById(user)
        })
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with ${userId} does not exist`)

            
            return User.updateOne({_id: user }, { $set: { role } })
           
        })
}