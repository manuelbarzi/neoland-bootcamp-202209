// const { readFile, writeFile } = require('fs')
const { ObjectId } = require('mongodb')
const context = require('./context')

function createPost(userId, text, visibility) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof text !== 'string') throw new TypeError('text is not a string')
    if (!text.length) throw new Error('text is empty')
    if (typeof visibility !== 'string') throw new TypeError('visibility is not a string')
    if (!visibility.length) throw new Error('visibility is empty')
    if (visibility !== 'public' && visibility !== 'private') throw new Error('invalid visibility')

    const { db } = context

    const users = db.collection('users')
    const posts = db.collection('posts')

    return users.findOne({ userId })
        .then(user => {
            if(!user) throw new Error(`user ${userId} does not exist`)

            const post = { user: ObjectId(userId), text, visibility, date: new Date}

            return posts.insertOne(post)
        })
        .then(() => { })

    // readFile('./data/users.json', 'utf8', (error, json) => {
    //     if (error) {
    //         callback(error)

    //         return
    //     }

    //     const users = JSON.parse(json)

    //     const exists = users.some(user => user.id === userId)

    //     if (!exists) {
    //         callback(new Error(`user with id ${userId} does not exist`))

    //         return
    //     }

    //     readFile('./data/posts.json', 'utf8', (error, json) => {
    //         if (error) {
    //             callback(error)

    //             return
    //         }

    //         const posts = JSON.parse(json)

    //         const { id: lastId } = posts[posts.length - 1]

    //         const newId = `post-${parseInt(lastId.substring(5)) + 1}`

    //         const post = { id: newId, user: userId, text, visibility, date: new Date().toISOString() }

    //         posts.push(post)

    //         const newJson = JSON.stringify(posts, null, 4)

    //         writeFile('./data/posts.json', newJson, error => {
    //             if (error) {
    //                 callback(error)

    //                 return
    //             }

    //             callback(null)
    //         })
    //     })
    // })
}

module.exports = createPost