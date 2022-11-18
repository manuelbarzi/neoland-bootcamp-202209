const { readFile, writeFile } = require('fs')

module.exports = function deletePost(postId, userId, callback){
    if (typeof postId !== 'string') throw new TypeError('postId is not a string')
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    readFile('./data/posts.json', 'utf8', (error, json) => {
        if (error) {
            callback(error)

            return
        }

        const posts = JSON.parse(json)

        const postExist = posts.find(post => post.postId === postId)

        if(postExist.userId !== userId){
            callback(new Error('invalid userId'))

            return
        }

        if(!postExist){
            callback(new Error('Post doesnt exist'))
    
            return
            }

        const indexOfPostToDelete = posts.findIndex(post => post.postId === postId)

        posts.splice(indexOfPostToDelete, 1)

        const jsonPosts = JSON.stringify(posts, null, 4)

        writeFile('./data/posts.json', jsonPosts, error => {
            if (error) {
                callback(error, 500)

                return
            }

            callback(null)
        })
    })
}