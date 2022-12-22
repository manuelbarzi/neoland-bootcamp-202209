const context = require('./context')
const { ObjectId } = require('mongodb')

function retrievePosts(userId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')

    const { db } = context

    const users = db.collection('users')
    const posts = db.collection('posts')

    return users.findOne({ _id: ObjectId(userId)})
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} does not exist`)

            return posts.find({ user: ObjectId(userId) }).sort({ date: -1 }).toArray()
        })

        .then(userPosts => {
            userPosts.forEach(userPost => {
                userPost.id = userPost._id.toString()
                delete userPost._id
                delete userPost.visibility
            })

            return userPosts
        })
}
module.exports = retrievePosts