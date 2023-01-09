const { User, Post } = require('../models')
const {
    errors: { NotFoundError },
    validators: { validateUserId, validatePostId, validateText }
} = require('com')

module.exports = function (userId, postId, text) {
    validateUserId(userId)
    validatePostId(postId)
    validateText(text)

    return User.findById(userId).select('-password').lean()
        .then(user => {
            if (!user)
                throw new NotFoundError('User not registered')

            return Post.findById(postId).lean()
        })
        .then(post => {
            if (!post)
                throw new NotFoundError('Post does not exist')


            return Post.updateOne({ _id: postId }, { $set: { text, date: new Date } })
        })
        .then(() => { })
}