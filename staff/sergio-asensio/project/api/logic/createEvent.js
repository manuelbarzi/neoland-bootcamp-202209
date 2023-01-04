const { errors: { LengthError, FormatError, NotFoundError, UnexpectedError } } = require('com')
const { User, Event } = require('../models')

function createEvent(userId, title, body, requirement, capacity, date, inscription, image) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new LengthError('userId is empty')

    if (typeof title !== 'string') throw new TypeError('text is not a string')
    if (!title.length) throw new LengthError('text is empty')

    if (typeof body !== 'string') throw new TypeError('body is not a string')
    if (!body.length) throw new LengthError('body is empty')

    if (typeof requirement !== 'string') throw new TypeError('requirement is not a string')
    if (!requirement.length) throw new LengthError('requirement is empty')

    if (typeof capacity !== 'number') throw new TypeError('capacity is not a number')
    if (!capacity) throw new LengthError('capacity is empty')

    if (date instanceof Date) throw new TypeError('date is not a Date')

    if (typeof inscription !== 'string') throw new TypeError('inscription is not a string')
    if (inscription !== 'close' && inscription !== 'open') throw new Error('invalid inscription')
    if (!inscription.length) throw new LengthError('inscription is empty')

    if (image) {
        if (typeof image !== 'string') throw new TypeError('image is not a string')
        if (!image.length) throw new LengthError('image is empty')
    }

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)
            if (user.role !== 'admin') throw new Error('user is not able to create a event')

            return Event.create({ user: userId, title, body, requirement, capacity, date, inscription, image })
        })
}

module.exports = createEvent