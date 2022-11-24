const { readFile } = require('fs')

function retrievePosts(userId, callback) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const parsedPosts = (error, json) => {
        if (error) {
            callback(error)

            return
        }

        const posts = JSON.parse(json)
        const post = posts.filter(post => post.userId === userId);

        callback(null, post)
    }
    readFile('./data/posts.json', 'utf8', parsedPosts)
}

module.exports = retrievePosts