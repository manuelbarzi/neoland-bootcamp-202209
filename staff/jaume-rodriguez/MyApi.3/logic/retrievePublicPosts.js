const { readFile } = require('fs')

function retrievePosts(userId, callback) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const userConfirmation = (error, json) => {
        if (error) {
            callback(error)

            return
        }

        const users = JSON.parse(json)
        const user = users.find(user => user.id === userId)

        if (!user) {
            callback(new Error(`user with id ${userId} does not exist`))

            return
        }

        const parsedPosts = (error, json) => {
            if (error) {
                callback(error)

                return
            }

            const posts = JSON.parse(json)
            const publics = posts.filter(post => {
                if (post.visibility === 'public') {
                    delete post.visibility

                    const user = users.find(user => user.id === post.user)
                    const { id, name } = user
                    post.user = { id, name }

                    return true
                }

                return false
            })

            publics.sort((a, b) => a.date > b.date ? -1 : a.date < b.date ? 1 : 0)

            callback(null, publics)
        }
        readFile('./data/posts.json', 'utf8', parsedPosts)
    }
    readFile('./data/users.json', 'utf8', userConfirmation)
}

module.exports = retrievePosts