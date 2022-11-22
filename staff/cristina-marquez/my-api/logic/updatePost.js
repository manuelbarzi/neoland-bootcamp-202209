const { readFileSync, writeFileSync } = require('fs')

function updatePost(postId, text, visibility) {
    if (typeof text !== 'string') throw new TypeError('text is not a string')
    if (!text.length) throw new Error('text is empty')
    if (typeof visibility !== 'string') throw new TypeError('visibility is not a string')
    if (!visibility.length) throw new Error('visibility is empty')
    if (visibility !== 'public' && visibility !== 'private') throw new Error('invalid visibility')

    const postsJSON = readFileSync('./data/posts.json', { encoding: 'utf8', flag: 'r' });
    if (!postsJSON) {
        throw new Error('Could not read posts database file')
    }
    const posts = JSON.parse(postsJSON)


    const foundpost = posts.find(post => post.id === postId)


    if (!foundpost) {
        throw new Error('post not found')
    }

    foundpost.text = text
    foundpost.visibility = visibility
    foundpost.date = new Date().toISOString()

    const newJson = JSON.stringify(posts, null, 4)

    writeFileSync('./data/posts.json', newJson)

    return foundpost

}

module.exports = updatePost