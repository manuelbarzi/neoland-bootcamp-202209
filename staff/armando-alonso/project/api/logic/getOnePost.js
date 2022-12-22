const { ObjectId } = require('mongodb')
const context = require('./context')

function getOnePost(userId, postId) {

    const { db } = context

    const users = db.collection('users')
    const posts = db.collection('posts')

    return users.findOne({ _id: ObjectId(userId) })
        .then(user => {
            if (!user) throw new Error(`El usuario no existe.`)

            return posts.findOne({ _id: ObjectId(postId) })
        })
        .then(post => {
            if (!post) throw new Error('El post no existe.')

            delete post._id
            delete post.user
            delete post.date

            return post
        })
    
}

module.exports = getOnePost