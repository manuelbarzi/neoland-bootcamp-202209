const { ObjectId } = require('mongodb')
const context = require('./context')

function getOpenOnePost(postId) {

    const { db } = context


    const posts = db.collection('posts')

    return posts.findOne({ _id: ObjectId(postId) })
        .then(post => {
            if (!post) throw new Error('El post no existe.')

            delete post._id
            delete post.user

            return post
        })
    
}

module.exports = getOpenOnePost