const { ObjectId } = require('mongodb')
const context = require('./context')

module.exports = function (userId, postId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof postId !== 'string') throw new TypeError('postId is not a string')
    if (!postId.length) throw new Error('postId is empty')

    const { db } = context
    const users = db.collection('users')
    const posts = db.collection('posts')

    return users.findOne({ _id: ObjectId(userId) })
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

            return posts.findOne({ _id: ObjectId(postId) })
        })
        .then(post => {
            if (!post)
                throw new Error(`post with id ${postId} does not exist`)

            if (post.user.toString() !== userId)
                throw new Error(`post with id ${postId} does not belong to user with id ${userId}`)


            return posts.deleteOne({ _id: ObjectId(postId) })
        })
        .then(result => {
            const { acknowledged } = result

            if (!acknowledged) throw new Error(`could not delete post with id ${postId}`)
         })
}