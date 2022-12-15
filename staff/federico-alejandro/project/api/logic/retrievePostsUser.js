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

            return Post.find({ user: userId }).sort({ date: -1 }).populate('user', '-email -password')
                .populate({
                    path: 'chats',
                    populate: {
                        path: 'user',
                        select: 'name',
                        select: '-email -password'
                    }
                })
                .populate({
                    path: 'chats',
                    populate: {
                        path: 'comments',
                        populate: {
                            path: 'user',
                            select: 'name'
                        }
                    }
                }).lean()
        })
        .then(posts => {
            posts.forEach(post => {
                post.id = post._id.toString()
                delete post._id
                delete post.__v
                // post.user = { id: post.user.toString() }
                if (!post.user.id) {
                    post.user.id = post.user._id.toString()
                    delete post.user._id
                }

                const chat = post.chats.find(chat => chat.user.id.toString() === userId)

                post.chats = []

                //  post.chats?.forEach(chat => {
                //     chat.id = chat._id.toString()

                //     delete chat._id
                //     delete chat.__v

                //     if (!chat.user.id) {
                //         chat.user.id = chat.user._id.toString()
                //         delete chat.user._id
                //     }
                if (chat) {
                    // delete chat._id
                    // delete chat.__v
                    chat.comments.forEach(comment => {
                        comment.id = comment._id.toString()

                        delete comment.__v
                        delete comment._id

                        //if (!comment.user.id) {
                        comment.user.id = comment.user._id.toString()
                        delete comment.user._id
                        //}
                        //})
                    })
                    post.chats.push(chat)
                }
            })

            return posts
        })
}
module.exports = retrievePostsUser