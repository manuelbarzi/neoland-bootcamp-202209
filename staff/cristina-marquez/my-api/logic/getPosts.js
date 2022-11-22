const { readFileSync } = require('fs')

function getPosts(userId) {
    const postsJSON = readFileSync('./data/posts.json', { encoding: 'utf8', flag: 'r' });

    if (!postsJSON) {
        throw new Error('Could not read posts database file')
    }
    const posts = JSON.parse(postsJSON)

    const visiblePosts = posts.filter(post => {
        if (userId === post.user || post.visibility === 'public') {
            return true
        }
    })


    visiblePosts.sort((a, b) => {
        const aTime = new Date(a.date).getTime()
        const bTime = new Date(b.date).getTime()

        if (aTime < bTime) {
            return 1;

        }
        if (aTime > bTime) {
            return -1;
        }
        return 0
    }

    )

    return visiblePosts
}

module.exports = getPosts
