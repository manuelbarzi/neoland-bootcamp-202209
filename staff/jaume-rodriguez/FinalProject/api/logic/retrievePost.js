const { User, Post } = require('../models')
const {
    errors: { NotFoundError },
    validators: { validateUserId, validatePostId }
} = require('com')

module.exports = function (userId, postId) {
    validateUserId(userId)
    validatePostId(postId)

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError('User not registered')

            return Post.findById(postId).lean()
        })
        .then(post => {
            if (!post)
                throw new NotFoundError('Post does not exist')

            delete post._id
            delete post.user
            delete post.date

            return post
        })
}