const { errors: { LengthError } } = require('com')
const { User, Post } = require('../models')
/**
 * Retrieves all public posts (from all users)
 * 
 * @param {string} userId The user id
 */
function retrievePublicPosts(userId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new LengthError('userId is empty')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

            return Post.find({ visibility: 'public' }).sort({ date: -1 }).populate('user', '-email -password').select('-__v').lean()
        })
        .then(posts => {
            posts.forEach(post => {
                post.id = post._id.toString()
                delete post._id

                if (!post.user.id) {
                    post.user.id = post.user._id.toString()
                    delete post.user._id
                }

                const chat = post.chats.find(chat => chat.user.toString() === userId)

                post.chats = []

                if (chat) {
                    delete chat._id
                    delete chat.user
                    delete chat.__v

                    chat.comments.forEach(comment => {
                        delete comment.user                    
                        delete comment.__v
    
                        if (comment.user.toString() !== userId) {
                            comment.id = comment._id.toString()
                            delete comment._id
                        }
                    })

                    post.chats.push(chat)
                }
            })


            return posts
        })
}
module.exports = retrievePublicPosts
