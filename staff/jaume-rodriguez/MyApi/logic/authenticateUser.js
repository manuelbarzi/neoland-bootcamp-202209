const context = require('./context')
const {
    errors: { NotFoundError, AuthError },
    validators: { validateEmail, validatePassword }
} = require('mycommons')

function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    const { db } = context

    const users = db.collection('users')

    return users.findOne({ email })
        .then(user => {
            if (!user)
                throw new NotFoundError('user not registered')

            if (user.password !== password)
                throw new AuthError('wrong password')

            return user._id.toString()
        })
}

module.exports = authenticateUser