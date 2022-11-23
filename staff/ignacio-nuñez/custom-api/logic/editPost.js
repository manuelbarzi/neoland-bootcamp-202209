const { readFile, writeFile } = require('fs')

module.exports = function editPost(userId, postId, content, visibility, callback) {
    if (!userId.length) throw new Error('userId is empty')
    if (typeof postId !== 'string') throw new TypeError('postId is not a string')
    if (!postId.length) throw new Error('postId is empty')
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!content.length) throw new Error('content is empty')
    if (typeof content !== 'string') throw new TypeError('content is not a string')
    if (!visibility.length) throw new Error('visibility is empty')
    if (typeof visibility !== 'string') throw new TypeError('visibility is not a string')
    if (visibility !== 'public' && visibility !== 'private') throw new Error('invalid visibility')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    readFile('./data/posts.json', 'utf8', (error, json) => {
        if (error) {
            callback(error)

            return
        }

        const posts = JSON.parse(json);

        const date = Date()

        const postToEdit = posts.find(post => post.postId === postId && post.userId === userId)

        if (!postToEdit) {
            callback(new Error('cant found this post corresponding to the user'))

            return
        }

        postToEdit.content = content
        postToEdit.visibility = visibility
        postToEdit.date = date

        const jsonPosts = JSON.stringify(posts, null, 4)

        writeFile('./data/posts.json', jsonPosts, error => {
            if (error) {
                callback(error)

                return
            }

            callback(null)
        })
    })
}