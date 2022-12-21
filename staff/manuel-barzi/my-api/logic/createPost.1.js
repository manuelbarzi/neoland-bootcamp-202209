const { ObjectId } = require('mongodb')
const context = require('./context')
const { errors : { LengthError, FormatError, NotFoundError, UnexpectedError }} = require('my-commons')

function createPost(userId, text, visibility) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new LengthError('userId is empty')
    if (typeof text !== 'string') throw new TypeError('text is not a string')
    if (!text.length) throw new LengthError('text is empty')
    if (typeof visibility !== 'string') throw new TypeError('visibility is not a string')
    if (!visibility.length) throw new LengthError('visibility is empty')
    if (visibility !== 'public' && visibility !== 'private') throw new FormatError('invalid visibility')

    const { db } = context

    const users = db.collection('users')
    const posts = db.collection('posts')

    return users.findOne({ _id: ObjectId(userId) })
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)


            const post = { user: ObjectId(userId), text, visibility, date: new Date }

            return posts.insertOne(post)
        })
        .then(result => {
            const { acknowledged } = result

            if (!acknowledged) throw new UnexpectedError('could not create post')
        })
}

module.exports = createPost