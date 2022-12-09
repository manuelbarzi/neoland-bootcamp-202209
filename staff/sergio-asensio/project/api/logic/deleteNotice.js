const { errors: { LengthError, NotFoundError } } = require('com')
const { User, Notice } = require('../models')

module.exports = function (userId, noticeId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new LengthError('userId is empty')
    if (typeof noticeId !== 'string') throw new TypeError('noticeId is not a string')
    if (!noticeId.length) throw new LengthError('noticeId is empty')

    return User.findById(userId) // .findOne({ _id: ... })
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

                return Notice.findById(noticeId)
        })
        .then (notice => {
            if(!noticeId) throw new NotFoundError(`post with id ${postId} not found`)
            
            if (notice.user.toString() !== userId)
                    throw new NotFoundError(`notice with id ${noticeId} does not belong to this user`)
            
                return Notice.deleteOne(noticeId)
        })


            
       
        
}