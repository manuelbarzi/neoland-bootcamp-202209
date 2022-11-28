//  const { readFile } = require('fs')
const context = require('./context')

 /**
 * Authenticates a user against DB
 * 
 * @param {string} email The user email
 * @param {string} password The user password
 */

function authenticateUser (email, password) {
    if (typeof email !== 'string') throw new TypeError ('email is not a string')
    if (!email.length) throw new Error ('email is empty') 
    if (typeof password !== 'string') throw new typeError ('password is not a string')
    // if (typeof callback !== 'function') throw new typeError ('callback is not a function')

    const { db } = context

    const users = db.collection('users')

    return users.findOne({ email })
    .then(user => {
        if(!user) throw Error ('user not registered')

        if(user.password !== password)
            throw new Error('password wrong')

        return user._id.toString()
    }) 

    // readFile('./data/users.json', 'utf8', (error, json) => {
    //     if (error) {
    //         callback (error)

    //         return
    //     }

    //     const users = JSON.parse(json)

    //     const user = users.find(_user => _user.email === email)
    //     //la variable user que se encuentra dentro del callback es independiente de la const user.

    //     if(!user) {
    //         callback(new Error('user not registered'))

    //         return
    //     }

    //     if(user.password !== password) {
    //         callback(new Error('wrong password'))

    //         return
    //     }

    //     callback(null, user.id)
    // })
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
