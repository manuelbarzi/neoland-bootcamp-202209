const { User } = require('../models')
const {
    errors: { NotFoundError },
    validators: { validatePassword, validateUserId }
} = require('com')

module.exports = function (userId, newPassword) {
    validateUserId(userId)
    validatePassword(newPassword)

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError('User not registered')

            return User.updateOne({ _id: userId }, { $set: { password: newPassword } })
        })
        .then(() => { })

}