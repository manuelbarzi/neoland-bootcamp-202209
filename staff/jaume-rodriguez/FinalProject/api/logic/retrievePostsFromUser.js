const { User, Post } = require('../models')
const {
    errors: { NotFoundError },
    validators: { validateUserId, validateTargetUserId }
} = require('com')

function retrievePostsFromUser(userId, targetUserId) {
    validateUserId(userId)
    validateTargetUserId(targetUserId)

    return User.findById(userId).select('-password').lean()
        .then(user => {
            if (!user) throw new NotFoundError('User not registered')

            return User.findById(targetUserId).select('-password').lean()
        })
        .then(targetUser => {
            if (!targetUser)
                throw new NotFoundError('The TargetUser does not exist')

            return Post.find({ user: targetUserId })
                .sort({ date: -1 })
                .select('-__v')
                .lean()
        })
}

module.exports = retrievePostsFromUser