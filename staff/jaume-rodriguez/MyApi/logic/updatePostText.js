const { readFile, writeFile } = require('fs')

function updatePostText(userId, postId, newText, callback) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof postId !== 'string') throw new TypeError('postId is not a string')
    if (!postId.length) throw new Error('postId is empty')
    if (typeof newText !== 'string') throw new TypeError('newText is not a string')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const updatePostText = (error, json) => {
        if (error) {
            callback(error)

            return
        }
        const posts = JSON.parse(json)
        const databasePost = posts.find(post => post.id === postId)
        if (databasePost === undefined) {

            callback(new Error(`postId not found`))
            return
        }

        // Valores y referencia / Valor = copia / referencia = puntero
        databasePost.text = newText

        const newJson = JSON.stringify(posts, null, 4)

        const postTextTranscribed = error => {
            if (error) {
                callback(error)

                return
            }
            callback(null)
        }
        writeFile('./data/posts.json', newJson, postTextTranscribed)
    }
    readFile('./data/posts.json', 'utf8', updatePostText)
}

module.exports = updatePostText