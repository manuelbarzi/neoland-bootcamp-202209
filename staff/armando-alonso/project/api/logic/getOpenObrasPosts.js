const context = require('./context')
const { ObjectId } = require('mongodb')


/**
 * Retrieves all public posts (from all users)
 * 
 * @param {string} userId The user id
 */
function getOpenObrasPosts() {


    const { db } = context

    const users = db.collection('users')
    const posts = db.collection('posts')

    return posts.find({ visibility: 'public', topic: 'obras' }).sort({ date: -1 }).toArray()
        .then(publicPosts => {
            const userFinds = publicPosts.map(publicPost => users.findOne({ _id: ObjectId(publicPost.user) }))

            return Promise.all(userFinds)
                .then(publicPostUsers => {
                    publicPosts.forEach((publicPost, index) => {
                        const { _id, name } = publicPostUsers[index]

                        publicPost.user = { id: _id.toString(), name }

                        publicPost.id = publicPost._id.toString()
                        publicPost.date = publicPost.date.toDateString()
                    })

                    return publicPosts
                })
        })
}

module.exports = getOpenObrasPosts