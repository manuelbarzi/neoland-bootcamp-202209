const { errors: { LengthError } } = require('com')
const { User, Post } = require('../models')
/**
 * Retrieves all posts from a specific user
 * 
 * @param {string} userId The user id
 * @param {string} targetUserId The target user id to retrieve posts from
 * 
 */
function retrievePublicPosts(userId, targetUserId) {//targetUserId = persona (objetivo) que quiero ver
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new LengthError('userId is empty')
    if (typeof targetUserId !== 'string') throw new TypeError('targetUserId is not a string')
    if (!targetUserId.length) throw new LengthError('targetUserId is empty')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

            return User.findById(targetUserId)
        })
        .then(targetUser => {
            if (!targetUser) throw new Error(`target user with id ${userId} does not exist`)

            return Post.find({ user: (targetUserId), visibility: 'public' }).sort({ date: -1 }).populate('user', '-visibility -email -password')
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
            }).select('-__v').lean()
        })
        .then(posts => {
            posts.forEach(post => {
                post.id = post._id.toString()
                delete post._id
                delete post.__v

                if (!post.user.id) {
                    post.user.id = post.user._id.toString()
                    delete post.user._id
                }

                const chat = post.chats.find(chat => chat.user.toString() === userId)

                post.chats = []

                if (chat) {
                    delete chat._id
                    delete chat.__v

                    chat.comments.forEach(comment => {
                        comment.id = comment._id.toString()
    
                        delete comment.__v
                        delete comment._id
                    })

                    //post.chats.push(chat)
                }
            })
            return posts
        })
}

module.exports = retrievePublicPosts