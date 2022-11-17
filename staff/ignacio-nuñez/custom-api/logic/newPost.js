const { readFile } = require('fs')
const { writeFile } = require('fs')

module.exports = function registerUser(content, userId, userName, callback) {
    if (!content.length) throw new Error('content is empty')
    if (typeof content !== 'string') throw new TypeError('content is not a string')
    // if (!privacity.length) throw new Error('privacity is empty')
    // if (typeof privacity !== 'string') throw new TypeError('privacity is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userName.length) throw new Error('name is empty')
    if (typeof userName !== 'string') throw new TypeError('name is not a string')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    readFile('./data/posts.json', 'utf8', (error, json) => {
        if (error) {
            callback(error, 500)

            return
        }

        const posts = JSON.parse(json)

        const userExist = posts.some(user => user.userId === userId)

        if (!userExist) {
            callback(new Error('Invalid User'), 409)

            return
        }

        [, numberPostId] = posts[posts.length - 1].postId.split('-')
        const postId = `post-${parseInt(numberPostId) + 1}`

        const date = Date()

        const post = { postId, content, date, userId, userName }

        posts.push(post)

        const jsonPosts = JSON.stringify(posts, null, 4)

        writeFile('./data/posts.json', jsonPosts, error => {
            if (error) {
                callback(error, 500)

                return
            }

            callback(null, 201)
        })
    })
}