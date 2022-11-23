const { readFile } = require('fs')

module.exports = function retrieveUserPerfil(userId, userSearchedId, callback) {
    if (!userId.length) throw new Error('userId is empty')
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userSearchedId.length) throw new Error('userSearchedId is empty')
    if (typeof userSearchedId !== 'string') throw new TypeError('userSearchedId is not a string')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    readFile('./data/users.json', (error, usersData) => {
        if (error) {
            callback(error)

            return
        }
        const users = JSON.parse(usersData)

        const validateUser = users.some(user => user.userId === userId)

        if (!validateUser) {
            callback(new Error(`user with id ${userId} does not exist`))

            return
        }

        readFile('./data/posts.json', (error, postsData) => {
            if (error) {
                callback(error)

                return
            }
            const posts = JSON.parse(postsData)

            const postsToRetrieve = posts.filter(post => post.userId === userSearchedId && post.visibility === 'public')

            postsToRetrieve.sort((a, b) => {
                if (a.date < b.date) {
                    return 1;
                }
                if (a.date > b.date) {
                    return -1;
                }
                return 0;
            });

            callback(null, postsToRetrieve)
        })
    })
}