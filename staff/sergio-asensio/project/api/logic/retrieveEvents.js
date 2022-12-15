const { errors: { LengthError, FormatError, NotFoundError, UnexpectedError } } = require('com')
const { User, Event } = require('../models')
/**
 * Retrieves all events
 * 
 * @param {string} userId The user id
 */
function retrieveEvents(userId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new LengthError('userId is empty')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)
            
            return Event.find().sort({ date: 1 }).populate('user', '-email -password -__v').lean()
        })
        .then(events => {
            events.forEach(event => {
                event.id = event._id.toString()
                delete event._id
                delete event.__v

                if (!event.user.id) {
                    event.user.id = event.user._id.toString()

                    delete event.user._id
                }
            })

            return events
        })
}

module.exports = retrieveEvents