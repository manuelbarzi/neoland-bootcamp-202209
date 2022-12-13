const { errors: { LengthError, FormatError, NotFoundError, UnexpectedError } } = require('com')
const { User, Event } = require('../models')

function createEvent(userId, title, body, requeriment, capacity, date, inscription, img) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new LengthError('userId is empty')

    if (typeof title !== 'string') throw new TypeError('text is not a string')
    if (!title.length) throw new LengthError('text is empty')

    if (typeof body !== 'string') throw new TypeError('visibility is not a string')
    if (!body.length) throw new LengthError('visibility is empty')

    if (typeof requeriment !== 'string') throw new TypeError('requeriment is not a string')
    if (!requeriment.length) throw new LengthError('requeriment is empty')

    if (typeof capacity !== 'number') throw new TypeError('capacity is not a number')
    if (!capacity) throw new LengthError('capacity is empty')


    // if (typeof date !== 'string') throw new TypeError('date is not a string')
    // if (!date.length) throw new LengthError('date is empty')

    if (typeof inscription !== 'string') throw new TypeError('inscription is not a string')
    if (inscription !== 'close' && inscription !== 'open') throw new Error('invalid inscription')
    if (!inscription.length) throw new LengthError('inscription is empty')
    

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)
            if (user.role !== 'admin') throw new Error('user is not able to create a event')

            return Event.create({ user: userId, title, body, requeriment, capacity, date, inscription, img })
        })
}

module.exports = createEvent