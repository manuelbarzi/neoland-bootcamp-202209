
const { errors: { LengthError, NotFoundError } } = require('com')
const { User, Notice } = require('../models')
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
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)
            if (user.role !== 'admin') throw new Error('user is not able to update a notice')

            return Notice.findById(noticeId)
        })
        .then(notice => {
            if (!notice)
                throw new NotFoundError(`post with id ${noticeId} does not exist`)

            return Notice.deleteOne({ _id: noticeId })
        })
}
module.exports = deleteNotice