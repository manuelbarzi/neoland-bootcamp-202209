const ObjectId = require('mongodb').ObjectId;
const context = require('../logic/context')

module.exports = async (req, res, next) => {
    try {

        const userId = req.user.id
        const postId = req.params.postId

        // If requested route has :postID parameter, we check ownership based on userID
        if (postId) {
            const { db } = context
            const postsDB = db.collection('posts')

            const post = await postsDB.findOne({ _id: new ObjectId(postId) })

            if (!post) {
                return res.status(404).send({ error: 'Post not found' })
            } else {
                if (post.userId === userId) {
                    return next()
                } else {
                    return res.status(401).send({ error: 'Not authorised' })
                }
            }

        }

        return next();
    } catch (error) {
        console.log(error)
        res.status(401).send({ error: 'Not authorised' })
    }
}