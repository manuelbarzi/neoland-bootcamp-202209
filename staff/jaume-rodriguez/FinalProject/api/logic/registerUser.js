const {
    errors: { ConflictError, UnexpectedError },
    validators: { validateEmail, validatePassword, validateName }
} = require('com')
const { User } = require('../models')
const { hash } = require('bcryptjs')

function registerUser(name, email, password) {
    validateName(name)
    validateEmail(email)
    validatePassword(password)

    return hash(password, 9)
        .then(hash => User.create({ name, email, password: hash })
            .catch(error => {
                if (error.message.includes('E11000'))
                    throw new ConflictError(`user with email ${email} already exists`)

                throw new UnexpectedError(error.message)
            })
        )
        .then(result => result.id)
        .catch(error => {
            if (error.message.includes('E11000'))
                throw new ConflictError(`user with email ${email} already exists`)

            throw new UnexpectedError(error.message)
        })
}

module.exports = registerUser