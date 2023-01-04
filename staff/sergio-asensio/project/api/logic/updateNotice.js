const { errors: { LengthError, FormatError, NotFoundError, UnexpectedError } } = require('com')
const { User, Notice } = require('../models')

module.exports = function (userId, noticeId, title, body) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new LengthError('userId is empty')
    if (typeof noticeId !== 'string') throw new TypeError('noticeId is not a string')
    if (!noticeId.length) throw new LengthError('noticeId is empty')
    if (typeof title !== 'string') throw new TypeError('title is not a string')
    if (!title.length) throw new LengthError('title is empty')
    if (typeof body !== 'string') throw new TypeError('body is not a string')
    if (!body.length) throw new LengthError('body is empty')

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

            
            return Notice.updateOne({_id: noticeId }, { $set: { title, body, date: new Date } })
           
        })
}