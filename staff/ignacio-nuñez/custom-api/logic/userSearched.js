const { readFile } = require('fs')

module.exports = function userSearched(userId, searchedUserId, callback){
    if (typeof userId !== 'string') throw new TypeError('id is not a string')
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    readFile('./data/users.json', 'utf8', (error, json) => {
        if (error) {
            callback(error)

            return
        }

        const users = JSON.parse(json)

        const user = users.some(user => user.userId === userId)

        if(!user){
        callback(new Error('invalid user'))

        return
        }
        
        const searchedUser =users.find(user => user.userId === searchedUserId)

        if(!searchedUser){
            callback(new Error('user dont found'))

            return
        }

        delete searchedUser.password
        delete searchedUser.userId
        delete searchedUser.email

        callback(null, searchedUser)
    })
}