const { User, Post } = require('../models')
const {
    errors: { NotFoundError },
    validators: { validateUserId }
} = require('com')

function retrievePublicPosts(userId) {
    validateUserId(userId)

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError('User not registered')


            return Post
                .find()
                .sort({ date: -1 }).populate('user', '-email -password')
                .select('-__v')
                .lean()
        })
        .then(posts => {
            posts.forEach(post => {
                post.id = post._id.toString()
                delete post._id

                if (!post.user.id) {
                    post.user.id = post.user._id.toString()
                    delete post.user._id
                }
            })

            return posts
        })
}

module.exports = retrievePublicPosts