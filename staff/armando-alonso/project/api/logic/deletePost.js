const { ObjectId } = require('mongodb')
const context = require('./context')

function deletePost( userId, postId ) {

    const { db } = context
    const posts = db.collection('posts')
    const users = db.collection('users')


    return users.findOne({ _id: ObjectId(userId) })
        .then(user => {
            if (!user)
                throw new Error(`El Usuario no existe.`)

            return posts.findOne({ _id: ObjectId(postId) })
        })
        .then(post => {
            if (!post)
                throw new Error(`El Post no existe.`)

            if (post.user.toString() !== userId)
                throw new Error(`No puedes borrar un post que no te pertenece`)


            return posts.deleteOne({ _id: ObjectId(postId) })
        })
        .then(result => {
            const { acknowledged } = result

            if (!acknowledged) throw new Error(`No se ha podido borrar el post`)
         })
}

module.exports = deletePost