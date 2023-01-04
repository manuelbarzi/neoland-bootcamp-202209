const { errors: { FormatError } } = require('com')
const { User } = require('../models')

function retrieveUser(userId, user) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new FormatError('userId is empty')

    if (typeof user !== 'string') throw new TypeError('userId is not a string')
    if (!user.length) throw new FormatError('userId is empty')

    return User.findById(userId)
        .then(userAdmin => {
            if (!userAdmin)
                throw new NotFoundError(`user with id ${userId} does not exist`)
            if (user.role !== 'admin')
                throw new Error('user is not able to update a notice')

            return User.findById(user)
            .then(user => {
                if(!user)
                    throw new NotFoundError(`user with id ${userId} does not exist`)


            user.id = user._id.toString()

            delete user._id

            return user

            })
            
        })
}

module.exports = retrieveUser