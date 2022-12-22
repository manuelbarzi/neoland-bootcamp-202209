const context = require('./context')
const { ObjectId } = require('mongodb')


/**
 * Retrieves all posts (from all users)
 * 
 * @param {string} userId The user id
 */
function getSessionPosts(userId) {

    const { db } = context

    const users = db.collection('users')
    const posts = db.collection('posts')

    return users.findOne({ _id: ObjectId(userId) })
        .then(user => {
            if (!user) throw new Error(`El usuario no existe`)

            return posts.find({ user: ObjectId(userId) }).sort({ date: -1 }).toArray()
        })
        .then(userPosts => {
            userPosts.forEach(userPost => {
                
                userPost.id = userPost._id.toString()
                delete userPost._id
            })
            return userPosts
        })
}

module.exports = getSessionPosts

// 