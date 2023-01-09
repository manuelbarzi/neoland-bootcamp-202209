const { User, Post } = require('../models')
const {
    errors: { NotFoundError, UnexpectedError },
    validators: { validateUserId, validatePostId }
} = require('com')

module.exports = function (userId, postId) {
    validateUserId(userId)
    validatePostId(postId)

    return User
        .findById(userId)
        .then((user) => {
            if (!user) throw new NotFoundError('User not registered')

            return Post.findById(postId).lean()
        })
        .then((post) => {
            if (!post) throw new NotFoundError('Post does not exist')

            if (post.user.toString() !== userId)
                throw new NotFoundError('Post does not belong to this user')

            return Post.deleteOne({ _id: postId });
        })
        .then(result => {
            const { acknowledged } = result

            if (!acknowledged) throw new UnexpectedError(`could not delete Post with id ${adventureId}`)
        })
};