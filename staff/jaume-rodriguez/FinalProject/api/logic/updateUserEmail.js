const { User } = require('../models')
const {
    errors: { NotFoundError },
    validators: { validateEmail, validateUserId }
} = require('com')

module.exports = function (userId, newEmail) {
    validateUserId(userId)
    validateEmail(newEmail)

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError('User not registered')

            return User.updateOne({ _id: userId }, { $set: { email: newEmail } })
        })
        .then(() => { })

}