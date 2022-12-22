const { ObjectId } = require('mongodb')
const context = require('./context')

function createPost( userId, title, resume, text, topic, visibility) {

    const { db } = context

    const users = db.collection('users')
    const posts = db.collection('posts')

    return users.findOne({ _id: ObjectId(userId) })
        .then(user => {
            if (!user)
                throw new Error(`El Usuario no existe.`)

            const post = { user: ObjectId(userId), title, resume, text, topic, visibility, date: new Date }

            return posts.insertOne(post)
        })
        .then(() => {})
}

module.exports = createPost