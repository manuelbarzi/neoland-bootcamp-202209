const { LengthError } = require('com/errors')
const { Users } = require('../models')

function retrieveUser(userId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if(!userId.length) throw new LengthError('userId is empty')

    return Users.findById(userId).select('-password').lean()
        .then(user => {
            if(!user)
                throw new NotFoundError(`user with Id ${userId} does not exist`)

                //sanitize
                user.id = user._id.toString()

                delete user._id

                return user
            })
}

module.exports = retrieveUser