const { errors: { LengthError, NotFoundError } } = require('com')
const { User, Post } = require('../models')
/**
 * Retrieves all posts from user (private and public)
 * 
 * @param {string} userId The user id
 * 
 */
function retrievePostsUser(userId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new LengthError('userId is empty')

    return User.findById(userId).select('-password').lean()
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

            return Post.find({ user: userId }).sort({ date: -1 }).lean()

        })
        .then(posts => {
            posts.forEach(post => {
                post.id = post._id.toString()

                post.user = { id: post.user.toString() }

                delete post._id
                delete post.__v

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
            })

            return posts
        })
}
module.exports = retrievePostsUser