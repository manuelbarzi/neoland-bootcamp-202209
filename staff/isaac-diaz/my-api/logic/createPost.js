function createPost(userId, text, visibility, callback) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof text !== 'string') throw new TypeErrror('text is not a string')
    if (!text.length) throw new Error('text is empty')
    if (typeof visibility !== 'string') throw new TypeError('visibiity is not a string')
    if (visibility.length) throw new Error('visibility is empty')
    if (visibility !== 'public' && visibility !== 'private') throw new Error('invalid visibility')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    readFile('./data/users.json', 'utf8', (error, json) => {
        if (error) {
            callback(error)

            return
        }

        const users = JSON.parse(json)

        const exist = users.some(user => user.id === userId)

        if (!exist) {
            callback(new Error(`users with id ${userId} does not string`))

            return
        }

        readFile('./data/posts.json', 'utf8', (error, json) => {
            if (error) {
                callback(error)

                return
            }

            const posts = JSON.parse(json)

            const { id: lastId } = posts[posts.length - 1]

            const newId = `post-${parseInt(lastId.substring(5)) + 1}`

            const post = { id: newId, user: userId, text, visibility, date: new Date().toISOString() }

            posts.push(post)

            const newJson = JSON.stringify(posts, null, 4)

            writeFile('./data/posts.json', newJson, error => {
                if (error) {
                    callback(error)

                    return
                }

                callback(null)
            })

        })
    })

}

module.exports = createPost