const { readFileSync } = require('fs')

function getPosts(userId) {
    const postsJSON = readFileSync('./data/posts.json', { encoding: 'utf8', flag: 'r' });

    if (!postsJSON) {
        throw new Error('Could not read posts database file')
    }
    const posts = JSON.parse(postsJSON)

    const userPosts = posts.filter(post => {
        if (userId === post.user) {

            return true

        }
    })

    return userPosts
}

module.exports = getPosts