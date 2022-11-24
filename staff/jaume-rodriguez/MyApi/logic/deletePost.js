const { readFile, writeFile } = require('fs')

function deletePost(userId, postId, callback) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof postId !== 'string') throw new TypeError('postId is not a string')
    if (!postId.length) throw new Error('postId is empty')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const postDelete = (error, json) => {
        if (error) {
            callback(error)

            return
        }
        const posts = JSON.parse(json)

        posts.splice(posts.findIndex(post => post.id === postId), 1);

        const newJson = JSON.stringify(posts, null, 4)

        const postTranscribed = error => {
            if (error) {
                callback(error)

                return
            }
            callback(null)
        }
        writeFile('./data/posts.json', newJson, postTranscribed)
    }
    readFile('./data/posts.json', 'utf8', postDelete)
}

module.exports = deletePost