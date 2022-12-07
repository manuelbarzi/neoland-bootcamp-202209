const { errors: { LengthError, FormatError, NotFoundError, UnexpectedError } } = require('my-commons')
const { User, Notice } = require('../models')
/**
 * Retrieves all public posts (from all users)
 * 
 * @param {string} userId The user id
 */
function retrieveNotices(userId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new FormatError('userId is empty')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)


            return Notice.find.sort({ date: -1 }).populate('user', '-email -password').select('-__v').lean()
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