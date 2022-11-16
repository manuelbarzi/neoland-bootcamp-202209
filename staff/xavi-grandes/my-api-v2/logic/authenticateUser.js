const { readFile } = require('fs')

function authenticateUser (email, password, callback) {
    if (typeof email !== 'string') throw new TypeError ('email is not a string')
    if (!email.length) throw new Error ('email is empty') 
    if (typeof password !== 'string') throw new typeError ('password is not a string')
    if (typeof callback !== 'function') throw new typeError ('callback is not a function')

    readFile('./data/users.json', 'utf8', (error, json) => {
        if (error) {
            callback (error)

            return
        }

        const users = JSON.parse(json)

        const user = users.find(_user => _user.email === email)
        //la variable user que se encuentra dentro del callback es independiente de la const user.

        if(!user) {
            callback(new Error('user not registered'))

            return
        }

        if(user.password !== password) {
            callback(new Error('wrong password'))

            return
        }

        callback(null, user.id)
    })
}

module.exports = authenticateUser
