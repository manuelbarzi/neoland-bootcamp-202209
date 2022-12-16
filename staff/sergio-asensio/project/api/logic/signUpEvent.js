const { errors: { LengthError, FormatError, NotFoundError, UnexpectedError } } = require('com')
const { User, Event } = require('../models')

module.exports = function (userId, eventId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new LengthError('userId is empty')

    if (typeof eventId !== 'string') throw new TypeError('eventId is not a string')
    if (!eventId.length) throw new LengthError('eventId is empty')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

            return Event.findById(eventId)
        })
        .then(event => {
            if (!event)
                throw new NotFoundError(`post with id ${eventId} does not exist`)

            
            // return Event.updateOne({_id: eventId }, { $set: { title, body, requirement, capacity, date, inscription, img } })
           
        })
}