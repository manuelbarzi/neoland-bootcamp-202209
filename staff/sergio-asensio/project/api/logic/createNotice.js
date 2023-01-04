const { errors: { LengthError, FormatError, NotFoundError, UnexpectedError } } = require('com')
const { User, Notice } = require('../models')

function createNotice(userId, title, body) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new LengthError('userId is empty')
    if (typeof title !== 'string') throw new TypeError('text is not a string')
    if (!title.length) throw new LengthError('text is empty')
    if (typeof body !== 'string') throw new TypeError('visibility is not a string')
    if (!body.length) throw new LengthError('visibility is empty')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)
            if (user.role !== 'admin') throw new Error('user is not able to create a notice')

            return Notice.create({ user: userId, title, body, date: new Date })
        })
}

module.exports = createNotice