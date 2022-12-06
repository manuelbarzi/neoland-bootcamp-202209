const { User } = require('../models')

module.exports = function (userId, newPassword) {
    if (!userId.length) throw new Error('userId is empty')
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!newPassword.length) throw new Error('Password is empty')
    if (typeof newPassword !== 'string') throw new TypeError('Password is not a string')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

            return User.updateOne({ userId }, { $set: { password: newPassword } })
        })
        .then(() => { })

}