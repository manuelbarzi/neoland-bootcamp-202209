const { User } = require('../models')
const { errors: { LengthError } } = require('com')

function changePassword(userId, password, newPassword) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new LengthError('userId is empty')
    if (typeof password !== 'string') throw new TypeError('password is not a string')
    if (!password.length) throw new LengthError('password is empty')
    if (typeof newPassword !== 'string') throw new TypeError('newPassword is not a string')
    if (!newPassword.length) throw new LengthError('newPassword is empty')

    return User.findById(userId)
    .then(user => {
        if(!user) throw new Error(`user with id ${userId} does not exist`)

        return User.updateOne({_id: userId}, {$set: {password}}).lean() //TODO
    })
}

module.exports = changePassword