const { errors: { LengthError, NotFoundError } } = require('com')
const { User, Post, Comment } = require('../models');
const { comment } = require('../models/schemas');
/**
 * Delete comment from an user
 * 
 * @param {string} userId The user id
 * @param {string} postId The post id
 * @param {string} commentId The comment id
 * 
 */
function deleteComment(userId, postId, commentId) {
    if (typeof userId !== 'string') throw TypeError('userId is not a string');
    if (userId.length === 0) throw new LengthError('userId is empty');

    if (typeof postId !== 'string') throw TypeError('postId is not a string');
    if (postId.length === 0) throw new LengthError('postId is empty');

    if (typeof commentId !== 'string') throw TypeError('commentId is not a string');
    if (commentId.length === 0 || commentId.trim() === '') throw new LengthError('commentId is empty')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Post.findById(postId)
        })
        .then(post => {
            if (!postId) throw new NotFoundError(`post with id ${postId} not found`)

            if (post.user.toString() !== userId) throw new Error(`post with id ${postId} does not belong to user ${userId}`)
        })
        .then(comment => {
            if (!commentId) throw new NotFoundError(`comment with id ${commentId} not found`)

            if (comment.user.toString() !== userId) throw new Error(`comment with id ${commentId} does not belong to user ${userId}`)

            return Post.deleteOne({ _id: commentId })
        })
}
module.exports = deleteComment