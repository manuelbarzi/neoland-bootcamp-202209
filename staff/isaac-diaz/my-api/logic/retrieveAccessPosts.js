const { readFile } = require("fs")

function retrieveAccessPosts(userId, callback) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    readFile('./data/users.json', 'utf8', (error, json) => {
        if (error) {
            callback(error)

            return
        }

        const users = JSON.parse(json)

        const user = users.find(user => user.id === userId)

        if (!user) {
            callback(new error('user with id ${userId} does not exist'))

            return
        }

        readFile('./data/posts.json', 'utf8', (error, json) => {
            if (error) {
                callback(error)

                return
            }

            const posts = JSON.parse(json)

            const postsToReturn = posts.filter(post => {
                if (post.user === userId || post.visibility === 'public') {
                    delete post.visibility

                    return true
                }

                return false
            })

            postsToReturn.sort((a, b) => a.date > b.date ? -1 : a.date < b.date ? 1 : 0)

            postsToReturn.forEach(post => {
                const user = users.find(user => user.id === post.user)

                const { id, name } = user

                post.user = { id, name }
            })

            callback(null, postsToReturn)
        })
    })
}

module.exports = retrieveAccessPosts