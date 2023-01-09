const { ObjectId } = require('mongodb')
const context = require('./context')

module.exports = function (userId, newPassword) {
    if (!userId.length) throw new Error('userId is empty')
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!newPassword.length) throw new Error('Password is empty')
    if (typeof newPassword !== 'string') throw new TypeError('Password is not a string')

    const { db } = context

    const users = db.collection('users')

    return users.findOne({ _id: ObjectId(userId) })
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

            return users.updateOne({ _id: ObjectId(userId) }, { $set: { password: newPassword } })
        })
        .then(() => { })

}