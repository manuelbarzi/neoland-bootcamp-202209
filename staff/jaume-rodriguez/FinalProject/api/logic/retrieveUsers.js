const { User } = require('../models')
const {
    errors: { NotFoundError },
    validators: { validateUserId }
} = require('com')

function retrieveUsers(userId) {
    validateUserId(userId)

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

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