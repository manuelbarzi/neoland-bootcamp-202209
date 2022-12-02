const context = require('./context')
const {
    errors: { ConflictError, UnexpectedError },
    validators: { validateEmail, validatePassword, validateName }
} = require('mycommons')

function registerUser(name, email, password) {
    validateName(name)
    validateEmail(email)
    validatePassword(password)

    const { db } = context

    const users = db.collection('users')

    return users.findOne({ email })
        .then(user => {
            if (user) throw new ConflictError(`user with email ${email} already exists`)

            return users.insertOne({ name, email, password })
        })
        .then(result => result.insertedId.toString())
        .catch(error => {
            if (error.message.includes('E11000'))
                throw new ConflictError(`user with email ${email} already exists`)

            throw new UnexpectedError(error.message)
        })
}

module.exports = registerUser