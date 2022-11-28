const context = require('./context')
const ObjectId = require('mongodb').ObjectId;


async function deletePost(postId) {


    const { db } = context
    const postsDB = db.collection('posts')

    const result = await postsDB.deleteOne({ _id: new ObjectId(postId) })

    console.log(`deleting ${postId}`)

    return result

}

module.exports = deletePost
