const { errors: { FormatError , NotFoundError} } = require('com')
const { User, Event } = require('../models')

function retrieveEvent(userId, eventId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new FormatError('userId is empty')
    if (typeof eventId !== 'string') throw new TypeError('eventId is not a string')
    if (!eventId.length) throw new FormatError('eventId is empty')


    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

            return Event.findById(eventId).select('-__v').lean()
        })
        .then(event => {
                if (!event)
                throw new NotFoundError(`event with id ${eventId} does not exist`)
                event.id = event._id.toString()
    
                delete event._id
    
                return event
            })
            
        
}

module.exports = retrieveEvent
