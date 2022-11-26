const { readFile } = require('fs')

function authenticateUser(email, password, callback) {
    if (typeof email !== 'string') throw new TypeError('email is not a string')
    if (!email.length) throw new Error('email is empty')
    if (typeof password !== 'string') throw new TypeError('password is not a string')
    if (!password.length) throw new Error('password is empty')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const parsedUser = (error, json) => {
        if (error) {
            callback(error)

            return
        }

        const users = JSON.parse(json)
        const user = users.find(user => user.email === email)

        if (!user) {
            callback(new Error('user not registered'))

            return
        }

        if (user.password !== password) {
            callback(new Error('wrong password'))

            return
        }

        callback(null, user.id, user.name)
    }
    readFile('./data/users.json', 'utf8', parsedUser)
}

module.exports = authenticateUser