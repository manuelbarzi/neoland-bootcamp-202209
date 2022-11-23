const { readFileSync, writeFileSync } = require('fs')

function deletePost(postId) {
    const postsJSON = readFileSync('./data/posts.json', { encoding: 'utf8', flag: 'r' });
    if (!postsJSON) {
        throw new Error('Could not read posts database file')
    }
    const posts = JSON.parse(postsJSON)

    let postIndexInArray = null;
    posts.map((post, i) => {
        if (post.id === postId) {
            postIndexInArray = i
        }
    })

    if (postIndexInArray === null) {
        throw new Error('post not found')
    }

    posts.splice(postIndexInArray, 1)

    const newJson = JSON.stringify(posts, null, 4)

    writeFileSync('./data/posts.json', newJson)

}

module.exports = deletePost
