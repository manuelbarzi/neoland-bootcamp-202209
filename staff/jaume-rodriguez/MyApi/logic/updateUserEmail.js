const { ObjectId } = require('mongodb')
const context = require('./context')

module.exports = function (userId, newEmail) {
    if (!userId.length) throw new Error('userId is empty')
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!newEmail.length) throw new Error('email is empty')
    if (typeof newEmail !== 'string') throw new TypeError('email is not a string')

    const { db } = context

    const users = db.collection('users')

    return users.findOne({ _id: ObjectId(userId) })
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

            return users.updateOne({ _id: ObjectId(userId) }, { $set: { email: newEmail } })
        })
        .then(() => { })

}