const { User } = require('../models')

function retrieveUsers(userId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

            return User
                .find()
                .select('-__v')
                .lean()
        })
        .then(users => {
            users.forEach(user => {
                user.id = user._id.toString()
                delete user._id

                if (!user.id) {
                    user.id = user._id.toString()
                    delete user._id
                }
            })

            return users
        })
}

module.exports = retrieveUsers