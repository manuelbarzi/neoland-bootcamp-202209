const { errors: { FormatError } } = require('com')
const { User, Notice } = require('../models')

function retrieveNotice(userId, noticeId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new FormatError('userId is empty')
    if (typeof noticeId !== 'string') throw new TypeError('noticeId is not a string')
    if (!noticeId.length) throw new FormatError('noticeId is empty')


    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)
            if (user.role !== 'admin') throw new Error('user is not able to update a notice')


            return Notice.findById(noticeId).select('-__v').lean()
        })
        .then(notice => {
            if (!notice)
            throw new NotFoundError(`notice with id ${noticeId} does not exist`)
            notice.id = notice._id.toString()

            delete notice._id

            return notice
        })
        
}

module.exports = retrieveNotice
