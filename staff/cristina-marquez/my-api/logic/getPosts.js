const context = require('./context')

async function getPosts(userId) {

    const { db } = context
    const postsDB = db.collection('posts')

    const postsCursor = postsDB.find({ $or: [{ visibility: 'public' }, { userId }] }, { sort: { date: -1 } })



    const posts = await postsCursor.toArray()


    return posts

}

module.exports = getPosts


// const postsJSON = readFileSync('./data/posts.json', { encoding: 'utf8', flag: 'r' });

// if (!postsJSON) {
//     throw new Error('Could not read posts database file')
// }
// const posts = JSON.parse(postsJSON)

// const visiblePosts = posts.filter(post => {
//     if (userId === post.user || post.visibility === 'public') {
//         return true
//     }
// })


// visiblePosts.sort((a, b) => {
//     const aTime = new Date(a.date).getTime()
//     const bTime = new Date(b.date).getTime()

//     if (aTime < bTime) {
//         return 1;

//     }
//     if (aTime > bTime) {
//         return -1;
//     }
//     return 0
// }

// )

// return visiblePosts