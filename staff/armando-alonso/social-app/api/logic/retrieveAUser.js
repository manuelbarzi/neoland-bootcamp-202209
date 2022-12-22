const context = require('./context')
const { ObjectId } = require('mongodb')

function retrieveAUser (userId, targetUserId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof targetUserId !== 'string') throw new TypeError('targetUserId is not a string')
    if (!targetUserId.length) throw new Error('targetUserId is empty')

    const { db } = context

    const users = db.collection('users')

    return users.findOne({ _id: ObjectId(userId) })
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} does not exist`) 

            return users.findOne({ _id: ObjectId(targetUserId)})
        })
        .then(targetUser => {
            if (!targetUser)
                throw new Error(`target user with id ${userId} does not exist`)

            delete targetUser._id
            delete targetUser.password

            return targetUser
        })
}

module.exports = retrieveAUser