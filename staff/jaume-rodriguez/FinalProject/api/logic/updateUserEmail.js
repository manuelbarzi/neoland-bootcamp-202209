const { User } = require('../models')

module.exports = function (userId, newEmail) {
    if (!userId.length) throw new Error('userId is empty')
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!newEmail.length) throw new Error('email is empty')
    if (typeof newEmail !== 'string') throw new TypeError('email is not a string')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

            return User.updateOne({ _id: userId }, { $set: { email: newEmail } })
        })
        .then(() => { })

}