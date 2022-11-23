const { readFile, writeFile } = require('fs')

function createPost(userId, visibilityPost, callback) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof visibilityPost !== 'string') throw new TypeError('visibilityPost is not a string')
    if (!visibilityPost.length) throw new Error('visibilityPost is empty')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const postCreation = (error, json) => {
        if (error) {
            callback(error)

            return
        }
        const posts = JSON.parse(json)

        const { id: lastId } = posts[posts.length - 1]
        const nextPostId = `post-${parseInt(lastId.substring(5)) + 1}`
        const post = {
            id: nextPostId,
            userId: userId,
            userName: "",
            text: "",
            visibility: visibilityPost
        }
        posts.push(post)
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
    readFile('./data/posts.json', 'utf8', postCreation)
}

module.exports = createPost