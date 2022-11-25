const context = require('./context')

/**
 * Authenticates a user against DB
 * 
 * @param {string} email The user email
 * @param {string} password The user password
 * @param {callback} callback The callback to attend the result
 */
function authenticateUser(email, password) {
    if (typeof email !== 'string') throw new TypeError('email is not a string')
    if (!email.length) throw new Error('email is empty')
    if (typeof password !== 'string') throw new TypeError('password is not a string')
    if (!password.length) throw new Error('password is empty')

    const { db } = context

    const users = db.collection('users')

    return users.findOne({ email })
        .then(user => {
            if (!user)
                throw new Error('user not registered')

            if (user.password !== password)
                throw new Error('wrong password')

            return user._id.toString()
        })
}

/**
 * Attends the result of the authentication
 * 
 * @callback callback
 * 
 * @param {Error} error The authentication error
 * @param {string} userId The id of the user that authenticated
 */

module.exports = authenticateUser