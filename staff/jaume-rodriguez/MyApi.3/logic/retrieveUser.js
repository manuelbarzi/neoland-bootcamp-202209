const { readFile } = require('fs')

function retrieveUser(userId, callback) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const parsedUser = (error, json) => {
        if (error) {
            callback(error)

            return
        }

        const users = JSON.parse(json)
        const user = users.find(user => user.id === userId)

        if (!user) {
            callback(new Error('user not registered'))

            return
        }
        callback(null, user)
    }
    readFile('./data/users.json', 'utf8', parsedUser)
}

module.exports = retrieveUser