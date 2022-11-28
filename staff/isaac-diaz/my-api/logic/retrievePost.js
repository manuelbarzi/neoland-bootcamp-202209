const { readFile } = require('fs')

function retrievePost(userId, postId, callback) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof postId !== 'string') throw new TypeError('postId is not a string')
    if (!postId.length) throw new Error('postId is empty')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    readFile('./data/users.json', 'utf8', (error, json) => {
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
     

        readFile('./data/posts.json', 'utf8', (error, json) => {
            if (error) {
                callback(error)

                return
            }

            const posts = JSON.parse(json)       

            const post = posts.find(post => post.id === postId)

            if (!post) {
                callback(new Error('post not created'))

                return
            }

            callback(null, post)
        })
    })
}
module.exports = retrievePost