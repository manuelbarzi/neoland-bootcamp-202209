const { User } = require('../models')

module.exports = function (userId, newName) {
    if (!userId.length) throw new Error('userId is empty')
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!newName.length) throw new Error('Name is empty')
    if (typeof newName !== 'string') throw new TypeError('Name is not a string')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

            return User.updateOne({ userId }, { $set: { name: newName } })
        })
        .then(() => { })

}