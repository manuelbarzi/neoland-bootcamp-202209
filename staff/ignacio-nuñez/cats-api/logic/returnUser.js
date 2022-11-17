const { readFile } = require('fs')

module.exports = function returnUser(userId, callback){
    if (typeof userId !== 'string') throw new TypeError('id is not a string')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    readFile('./data/users.json', 'utf8', (error, json) => {
        if (error) {
            callback(error)

            return
        }

        const users = JSON.parse(json)

        const user = users.find(user => user.userId === userId)

        if(!user){
        callback(new Error('User not registered'))

        return
        }

        callback(null, user)
    })
}