const { readFile } = require('fs')

/**
 * Retrieves all public posts (from all users)
 * 
 * @param {*} userId 
 * @param {*} callback 
 */
 function retrievePublicPosts(userId, callback) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')
    
    readFile('./data/posts.json', 'utf8', (error, json) => {
        if (error) {
            callback(error)

            return
        }

        const posts = JSON.parse(json)

        const postsFiltered = posts.filter(post => post.visibility === 'public' || post.user === userId)
        
        callback(null, postsFiltered)
    })
}
module.exports = retrievePublicPosts


