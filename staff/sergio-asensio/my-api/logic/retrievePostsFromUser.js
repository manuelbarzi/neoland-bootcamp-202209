const { ObjectId } = require('mongodb')
const context = require('./context')

/**
 * Retrieves all posts from a specific user
 * 
 * @param {string} userId The user id
 * @param {string} targetUserId The target user id to retrieve posts from
 */
function retrievePublicPosts(userId, targetUserId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof targetUserId !== 'string') throw new TypeError('targetUserId is not a string')
    if (!targetUserId.length) throw new Error('targetUserId is empty')

    const { db } = context

    const users = db.collection('users')
    const posts = db.collection('posts')

    return users.findOne({ _id: ObjectId(userId) })
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} does not exist`)

            return users.findOne({ _id: ObjectId(targetUserId) })
        })
        .then(targetUser => {
            if (!targetUser)
                throw new Error(`target user with id ${userId} does not exist`)

            return posts.find({ user: ObjectId(targetUserId), visibility: 'public' }).sort({ date: -1 }).toArray()
        })
        .then(userPosts => {
            userPosts.forEach(userPost => {
                delete userPost._id
                delete userPost.user
                delete userPost.visibility
            })

            return userPosts
        })
}

module.exports = retrievePublicPosts