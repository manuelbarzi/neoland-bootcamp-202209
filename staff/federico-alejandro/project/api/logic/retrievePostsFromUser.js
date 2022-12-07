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
        if(!user)
        throw new Error(`user with id ${userId} does not exist`)

        return User.findById(targetUserId)
    })
    .then(targetUser => {
        if (!targetUser) throw new Error(`target user with id ${userId} does not exist`)

        return Post.find({visibility: 'public' }).sort({ date: -1 }).populate('user', '-visibility -email -password').select('-__v').lean()
    })
    .then(posts => {
        posts.forEach(post => {
            post.id = post._id.toString()
            delete post._id

            if(!post.user.id) {
                post.user.id = post.user._id.toString()
                delete post.user._id
            }
        })
            return posts
    })
}

module.exports = retrievePublicPosts