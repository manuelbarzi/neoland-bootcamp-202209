const { User } = require('../models')

module.exports = function (userId, password, newPassword) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof password !== 'string') throw new TypeError('password is not a string')
    if (!password.length) throw new Error('password is empty')
    if (typeof newPassword !== 'string') throw new TypeError('newPassword is not a string')
    if (!newPassword.length) throw new Error('newPassword is empty')

    return User.findById(userId)
    .then(user => {
        if(!user) throw new Error(`user with id ${userId} does not exist`)
        if(user.password === password) {
            
            return User.updateOne({ _id: userId }, { $set: {password: newPassword} })
        }
        throw new Error('Current password wrong')
    })
}
