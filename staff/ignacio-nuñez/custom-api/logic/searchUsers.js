const { readFile } = require('fs')

module.exports = function searchUsers(name, userId, callback) {
    if (typeof name !== 'string') throw new TypeError('name is not a string')
    if (!name.length) throw new TypeError('name is empty')
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new TypeError('userId is empty')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    readFile('./data/users.json', (error, data) => {
        if (error) {
            callback(error)

            return
        }
        const users = JSON.parse(data)

        const userValidation = users.some(user => user.userId === userId)

        if (!userValidation) {
            callback(new Error(`user with id ${userId} does not exist`))

            return
        }

        const searchedUsers = users.filter(user => {
           if(user.name.toLowerCase().includes(name) && user.userId !== userId){
            
            delete user.password
            delete user.email

            return true
           }

           return false
        })

        callback(null, searchedUsers)
    })
}