const { FormatError, LengthError, NotFoundError, AuthError } = require('com/errors')
const { HAS_SPACES_REGEX, IS_EMAIL_REGEX } = require('com/regex')

const { User } = require('../models')

/**
* Authtenticates a User
*
*@param {string} email the user Email
*@param {string} password the user password
*/

function authenticateUser(email, password) {
    if (typeof email !== 'string') throw new TypeError('email is not a string')
    if (!IS_EMAIL_REGEX.test(email)) throw new FormatError('email is not alphabetical')

    if (typeof password !== 'string') throw new TypeError('password is not a string')
    if (password.length < 8) throw new LengthError('password length is less than 8')
    if (HAS_SPACES_REGEX.test(password)) throw new FormatError('password has spaces')

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