const { readFile } = require('fs')

module.exports = function authenticateUser(email, password, callback){
    if (!email.length) throw new Error('email is empty')
    if (typeof email !== 'string') throw new TypeError('email is not a string')
    if (!password.length) throw new Error('password is empty')
    if (typeof password !== 'string') throw new TypeError('password is not a string')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    readFile('./data/users.json', 'utf8', (error, json) => {
        if (error) {
            callback(error)

            return
        }

        const users = JSON.parse(json)

        const user = users.find(user => user.email === email)

        if(!user){
        callback(new Error('user dont found'))

        return
        }

        if(password !== user.password){
            callback(new Error('wrong password'))

            return
        }

        callback(null, user.userId)
    })
}