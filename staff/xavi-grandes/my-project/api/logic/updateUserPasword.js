const { User } = require('../models')

module.exports = function (userId, newPasword) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof newPasword !== 'string') throw new TypeError('newPasword is not a string')
    if (!newPasword.length) throw new Error('newPasword is empty')

    return User.findById(userId)
    .then(user => {
        if(!user) throw new Error(`user with id ${userId} does not exist`)

        return User.updateOne({ _id: userId}, { $set: {password: newPasword} })
    })
}
