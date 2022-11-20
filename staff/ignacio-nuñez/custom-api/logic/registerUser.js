const { readFile } = require('fs')
const { writeFile } = require('fs')

module.exports = function registerUser(name, email, password, callback) {
    if (!name.length) throw new Error('name is empty')
    if (typeof name !== 'string') throw new TypeError('name is not a string')
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

        const userExist = users.some(user => user.email === email)

        if (userExist) {
            callback(new Error('Email already registered'))

            return
        }

        [, numberUserId] = users[users.length - 1].userId.split('-')
        const userId = `user-${parseInt(numberUserId) + 1}`

        const user = { userId, name, email, password }

        users.push(user)

        const jsonUsers = JSON.stringify(users, null, 4)

        writeFile('./data/users.json', jsonUsers, error => {
            if (error) {
                callback(error)

                return
            }

            callback(null)
        })
    })
}