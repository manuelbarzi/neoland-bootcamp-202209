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

            return Notice.findById(noticeId).select('-__v').lean()
        })
        .then(notice => {
            if (notice.user.toString() !== userId)
                throw new NotFoundError(`notice with id ${noticeId} does not belong to this user`)
            notice.id = notice._id.toString()

            delete notice._id

            return notice
        })
        
}

module.exports = retrieveNotice

// "_id": "638f84013317e4d729003ba9",
// "user": "638e0dda6e6c7baae7cdd36d",
// "title": "siiiiiiiiiiiiii",
// "body": "modif",
// "date": "2022-12-07T10:19:35.904Z",
// "__v": 0