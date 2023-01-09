const {
    errors: { NotFoundError, AuthError },
    validators: { validateEmail, validatePassword }
} = require('com')
const { User } = require('../models')

function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    return User.findOne({ email })
        .then(user => {
            if (!user)
                throw new NotFoundError('user not registered')

            if (user.password !== password)
                throw new AuthError('wrong password')

            return user.id
        })
}

module.exports = authenticateUser