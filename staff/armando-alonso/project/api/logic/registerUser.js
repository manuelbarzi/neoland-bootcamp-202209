const context = require('./context')

/**
 * Authenticates a user against DB
 * 
 * @param {string} email The user email
 * @param {string} password The user password
 */
function registerUser(name, surname, direction, postal, barrio, email, password, role) {

    const { db } = context 

    const users = db.collection('users')

    return users.findOne({ email })
        .then(user => {
            if (user) throw new Error('User exists')
    
            return users.insertOne({name, surname, direction, postal, barrio, email, password, role})
        })
}

/**
 * Attends the result of the authentication
 *
 * 
 * @param {Error} error The authentication error
 * @param {string} userId The id of the user that authenticated
 */

module.exports = registerUser