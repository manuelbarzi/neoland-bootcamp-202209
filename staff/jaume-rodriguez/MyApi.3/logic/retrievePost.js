const { readFile } = require('fs')

module.exports = function (userId, postId, callback) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof postId !== 'string') throw new TypeError('postId is not a string')
    if (!postId.length) throw new Error('postId is empty')
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

        const parsedPost = (error, json) => {
            if (error) {
                callback(error)

                return
            }

            const posts = JSON.parse(json)
            const post = posts.find(post => post.id === postId)

            if (!post) {
                callback(new Error(`post with id ${postId} does not exist`))

                return
            }

            if (post.user !== userId) {
                callback(new Error(`post with id ${postId} does not belong to user with id ${userId}`))

                return
            }

            delete post.id
            delete post.date
            delete post.user

            callback(null, post)
        }
        readFile('./data/posts.json', 'utf8', parsedPost)
    }
    readFile('./data/users.json', 'utf8', userConfirmation)
}