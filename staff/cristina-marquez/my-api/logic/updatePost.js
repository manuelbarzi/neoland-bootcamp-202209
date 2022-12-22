const context = require('./context')
const ObjectId = require('mongodb').ObjectId;

async function updatePost(postId, text, visibility) {
    if (typeof text !== 'string') throw new TypeError('text is not a string')
    if (!text.length) throw new Error('text is empty')
    if (typeof visibility !== 'string') throw new TypeError('visibility is not a string')
    if (!visibility.length) throw new Error('visibility is empty')
    if (visibility !== 'public' && visibility !== 'private') throw new Error('invalid visibility')


    const { db } = context
    const postsDB = db.collection('posts')


    const result = await postsDB.updateOne({ _id: new ObjectId(postId) }, {
        $set: {
            text: text,
            visibility: visibility,
            date: new Date().toISOString()
        }

    })


    return result.modifiedCount
}

module.exports = updatePost
