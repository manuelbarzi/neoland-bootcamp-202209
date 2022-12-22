const { User } = require('../models')
const {
    errors: { NotFoundError },
    validators: { validateName, validateUserId }
} = require('com')

module.exports = function (userId, newName) {
    validateUserId(userId)
    validateName(newName)
    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError('User not registered')
            return User.updateOne({ _id: userId }, { $set: { name: newName } })
        })
        .then(() => { })

}