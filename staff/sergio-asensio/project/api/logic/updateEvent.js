const { errors: { LengthError, FormatError, NotFoundError, UnexpectedError } } = require('com')
const { User, Event } = require('../models')

module.exports = function (userId, eventId, title, body, requirement, capacity, date, inscription, img) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new LengthError('userId is empty')

    if (typeof eventId !== 'string') throw new TypeError('eventId is not a string')
    if (!eventId.length) throw new LengthError('eventId is empty')

    if (typeof title !== 'string') throw new TypeError('title is not a string')
    if (!title.length) throw new LengthError('title is empty')

    if (typeof body !== 'string') throw new TypeError('body is not a string')
    if (!body.length) throw new LengthError('body is empty')

    if (typeof requirement !== 'string') throw new TypeError('requirement is not a string')
    if (!requirement.length) throw new LengthError('requirement is empty')

    if (typeof capacity !== 'number') throw new TypeError('capacity is not a number')
    if (!capacity) throw new LengthError('number is empty')

    if (typeof date !== 'string') throw new TypeError('date is not a string')
    if (!date.length) throw new LengthError('date is empty')

    if (typeof inscription !== 'string') throw new TypeError('inscription is not a string')
    if (!inscription.length) throw new LengthError('inscription is empty')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)
            if (user.role !== 'admin') throw new Error('user is not able to update a notice')

            return Event.findById(eventId)
        })
        .then(event => {
            if (!event)
                throw new NotFoundError(`post with id ${eventId} does not exist`)
            
            return Event.updateOne({_id: eventId }, { $set: { title, body, requirement, capacity, date, inscription, img } })
           
        })
}