const {
    errors: { ConflictError, UnexpectedError },
    validators: { validateEmail, validatePassword, validateName }
} = require('com')
const { User } = require('../models')

function registerUser(name, email, password) {
    validateName(name)
    validateEmail(email)
    validatePassword(password)

    return User.findOne({ email })
        .then(user => {
            if (user) throw new ConflictError(`user with email ${email} already exists`)

            return User.create({ name, email, password })
        })
        .then(result => result.id)
        .catch(error => {
            if (error.message.includes('E11000'))
                throw new ConflictError(`user with email ${email} already exists`)

            throw new UnexpectedError(error.message)
        })
}

module.exports = registerUser