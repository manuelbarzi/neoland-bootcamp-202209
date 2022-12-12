const { errors: { LengthError, NotFoundError } } = require('com')
const { User, Post } = require('../models')
/**
 * Retrieves a post from user
 * 
 * @param {string} userId The user id
 * @param {string} postId The post id
 * 
 */
module.exports = function (userId, postId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new LengthError('userId is empty')
    if (typeof postId !== 'string') throw new TypeError('postId is not a string')
    if (!postId.length) throw new LengthError('postId is empty')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

            return Post.findById(postId).lean()
        })
        .then(post => {
            if (!post) throw new NotFoundError(`post with id ${postId} does not exist`)

            post.id = post._id.toString()
            delete post._id
            delete post.date
            delete post.user

            const chat = post.chats.find(chat => chat.user.toString() === userId)

            post.chats = []

            if (chat) {
                delete chat._id
                delete chat.user
                delete chat.__v

                chat.comments.forEach(comment => {
                    comment.id = comment._id.toString()

                    delete comment.__v
                    delete comment._id
                })

                post.chats.push(chat)
            }

            return post
        })
}