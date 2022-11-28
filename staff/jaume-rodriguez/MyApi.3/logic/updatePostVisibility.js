const { readFile, writeFile } = require('fs')

function updatePostVisibility(userId, postId, newVisibility, callback) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof postId !== 'string') throw new TypeError('postId is not a string')
    if (!postId.length) throw new Error('postId is empty')
    if (typeof newVisibility !== 'string') throw new TypeError('newVisibility is not a string')
    if (!newVisibility.length) throw new Error('newVisibility is empty')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const updatePostVisibility = (error, json) => {
        if (error) {
            callback(error)

            return
        }
        const posts = JSON.parse(json)
        const databasepost = posts.find(post => post.id === postId)
        if (databasepost === undefined) {

            callback(new Error(`postId not found`))
            return
        }

        if (databasepost.visibility === newVisibility) {
            callback(new Error(`Your new visibility cannot be the same as the current visibility`))

            return
        }
        // Valores y referencia / Valor = copia / referencia = puntero
        databasepost.visibility = newVisibility

        const newJson = JSON.stringify(posts, null, 4)

        const postVisibilityTranscribed = error => {
            if (error) {
                callback(error)

                return
            }
            callback(null)
        }
        writeFile('./data/posts.json', newJson, postVisibilityTranscribed)
    }
    readFile('./data/posts.json', 'utf8', updatePostVisibility)
}

module.exports = updatePostVisibility