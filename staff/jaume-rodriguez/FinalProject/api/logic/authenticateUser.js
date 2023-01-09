const {
    errors: { NotFoundError, AuthError },
    validators: { validateEmail, validatePassword }
} = require('com')
const { User } = require('../models')
const { compare } = require('bcryptjs')

function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    return User.findOne({ email })
        .then(user => {
            if (!user)
                throw new NotFoundError('user not registered')

            return compare(password, user.password)
                .then(match => {
                    if (!match)
                        throw new AuthError('wrong password')

                    return user.id
                })
        })
}

module.exports = authenticateUser