const { User } = require('../models')
const {
    errors: { NotFoundError },
    validators: { validateUserId, validateTargetUserId }
} = require('com')

module.exports = function (userId, targetUserId) {
    validateUserId(userId)
    validateTargetUserId(targetUserId)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError('User not registered')

            return User.findById(targetUserId).select('-password').lean()
        })
        .then(targetUser => {
            if (!targetUser)
                throw new NotFoundError('The TargetUser does not exist')

            delete targetUser._id
            delete targetUser.password

            return targetUser
        })
}