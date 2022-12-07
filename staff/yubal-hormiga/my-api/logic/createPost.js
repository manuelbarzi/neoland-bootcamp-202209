const { errors: { LengthError, FormatError, NotFoundError, UnexpectedError } } = require('my-commons')
const { User, Post } = require('../models')

function createPost(userId, text, visibility) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new LengthError('userId is empty')
    if (typeof text !== 'string') throw new TypeError('text is not a string')
    if (!text.length) throw new LengthError('text is empty')
    if (typeof visibility !== 'string') throw new TypeError('visibility is not a string')
    if (!visibility.length) throw new LengthError('visibility is empty')
    if (visibility !== 'public' && visibility !== 'private') throw new FormatError('invalid visibility')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

            return Post.create({ user: userId, text, visibility, date: new Date })
        })
}

module.exports = createPost