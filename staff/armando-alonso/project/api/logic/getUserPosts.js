const { ObjectId } = require('mongodb')
const context = require('./context')

function getUserPosts(userId, targetUserId) {

    const { db } = context

    const users = db.collection('users')
    const posts = db.collection('posts')

    return users.findOne({ _id: ObjectId(userId) })
        .then(user => {
            if (!user) throw new Error(`El usuario no existe`)

            return users.findOne({ _id: ObjectId(targetUserId), visibility: 'public' })
        })
        .then(targetUser => {
            if (!targetUser) throw new Error(`No existe el usuario especificado`)

            return posts.find({ user: ObjectId(targetUserId) }).sort({ date: -1 }).toArray()
        })
        .then(userPosts => {
            userPosts.forEach(userPost => {
                delete userPost._id
            })
            return userPosts
        })
}

module.exports = getUserPosts