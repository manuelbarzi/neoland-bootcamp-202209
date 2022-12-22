const context = require('./context')
const { ObjectId } = require('mongodb')

function createPost(userId, text, visibility) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof text !== 'string') throw new TypeError('text is not a string')
    if (!userId.length) throw new Error('text is empty')
    if (typeof visibility !== 'string') throw new TypeError('visibility is not a string')
    if (!visibility.length) throw new Error('visibility is empty')

    const { db } = context

    const users = db.collection('users')
    const posts = db.collection('posts')

    return users.findOne({ _id:ObjectId(userId) })
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} does not exist`)

            const post = { user: ObjectId(userId), text, visibility, date: new Date }

            return posts.insertOne(post)
        })
        // este ultimo then lo usamos para no retornar nada
        .then(result => {
            const { acknowledged } = result 
    
            if (!acknowledged) throw new Error(`could not insert post with id ${postId}`)
         })
}

module.exports = createPost