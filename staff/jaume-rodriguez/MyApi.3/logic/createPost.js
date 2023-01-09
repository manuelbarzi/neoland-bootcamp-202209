const { readFile, writeFile } = require('fs')

function createPost(userId, text, visibility, callback) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof text !== 'string') throw new TypeError('text is not a string')
    if (!text.length) throw new Error('text is empty')
    if (typeof visibility !== 'string') throw new TypeError('visibility is not a string')
    if (!visibility.length) throw new Error('visibility is empty')
    if (visibility !== 'public' && visibility !== 'private') throw new Error('invalid visibility')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const userConfirmation = (error, json) => {
        if (error) {
            callback(error)

            return
        }

        const users = JSON.parse(json)
        const exists = users.some(user => user.id === userId)

        if (!exists) {
            callback(new Error(`user with id ${userId} does not exist`))

            return
        }

        const postCreation = (error, json) => {
            if (error) {
                callback(error)

                return
            }

            const posts = JSON.parse(json)
            const { id: lastId } = posts[posts.length - 1]
            const postId = `post-${parseInt(lastId.substring(5)) + 1}`

            const date = new Date()
            const post = {
                id: postId,
                user: userId,
                text,
                visibility,
                date
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
    readFile('./data/users.json', 'utf8', userConfirmation)
}

module.exports = createPost