const { errors: { LengthError, NotFoundError } } = require('com')
const { User, Post } = require('../models')
/**
 * Retrieves all posts from user (private and public)
 * 
 * @param {string} userId The user id
 * 
 */
 function retrievePostsUser(userId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new LengthError('userId is empty')

    return User.findById(userId).select('-password').lean()
    .then(user => {
        if (!user)
            throw new NotFoundError(`user with id ${userId} does not exist`)

            return Post.find({user: userId}).sort({ date: -1 }).lean()

    })
}
module.exports = retrievePostsUser