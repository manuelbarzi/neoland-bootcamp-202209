const { readFile } = require('fs')

module.exports = function searchUsers(name, userId, callback) {
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
            return user.name.toLowerCase().includes(name) && user.userId !== userId
        })

        const searchedUsersDataToReturn = searchedUsers.reduce((userData, user) => {
            const { name, userId } = user

            userData[userData.length] = { name, userId }

            return userData
        }, [])
        callback(null, searchedUsersDataToReturn)
    })
}