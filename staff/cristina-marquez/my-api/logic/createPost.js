const context = require('./context')

async function createPost(userId, text, visibility) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (typeof text !== 'string') throw new TypeError('text is not a string')
    if (!text.length) throw new Error('text is empty')
    if (typeof visibility !== 'string') throw new TypeError('visibility is not a string')
    if (!visibility.length) throw new Error('visibility is empty')
    if (visibility !== 'public' && visibility !== 'private') throw new Error('invalid visibility')

    const { db } = context

    const posts = db.collection('posts')

    const result = await posts.insertOne({ userId, text, visibility })


    return result.newPostId

}

module.exports = createPost


// const usersJSON = readFileSync('./data/users.json', { encoding: 'utf8', flag: 'r' });

// if (!usersJSON) {
//     throw new Error('Could not read users database file')
// }

// const users = JSON.parse(usersJSON)


// const exists = users.some(user => user.id === userId)

// if (!exists) {
//     throw new Error(`user with id ${userId} does not exist`)
// }

// const postsJSON = readFileSync('./data/posts.json', { encoding: 'utf8', flag: 'r' });

// if (!postsJSON) {
//     throw new Error('Could not read posts database file')
// }


// const posts = JSON.parse(postsJSON)

// const { id: lastId } = posts[posts.length - 1]

// const newId = `post-${parseInt(lastId.substring(5)) + 1}`

// const post = { id: newId, user: userId, text, visibility, date: new Date().toISOString() }

// posts.push(post)

// const newJson = JSON.stringify(posts, null, 4)

// writeFileSync('./data/posts.json', newJson)