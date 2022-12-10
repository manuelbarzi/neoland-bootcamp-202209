
const { errors: { LengthError, NotFoundError } } = require('com')
const { User, Post, Notice } = require('../models')
/**
 * Delete post from a specific user
 * 
 * @param {string} userId The user id
 * @param {string} noticeId The post id
 * 
 */
function deleteNotice(userId, noticeId) {
    if (typeof userId !== 'string') throw TypeError('userId is not a string');
    if (userId.length === 0) throw new LengthError('userId is empty');
    
    if (typeof noticeId !== 'string') throw TypeError('noticeId is not a string');
    if (noticeId.length === 0 || noticeId.trim() === '') throw new LengthError('noticeId is empty')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Notice.findById(noticeId)
        })
        .then(notice => {
            if(!noticeId) throw new NotFoundError(`notice with id ${noticeId} not found`)

            if (notice.user.toString() !== userId) throw new Error(`notice with id ${noticeId} does not belong to user ${userId}`)

            return Notice.deleteOne({ _id: noticeId })
        })
}
module.exports = deleteNotice