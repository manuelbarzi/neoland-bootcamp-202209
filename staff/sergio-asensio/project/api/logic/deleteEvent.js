
const { errors: { LengthError, NotFoundError } } = require('com')
const { User, Event } = require('../models')
/**
 * Delete post from a specific user
 * 
 * @param {string} userId The user id
 * @param {string} eventId The event id
 * 
 */
function deleteEvent(userId, eventId) {
    if (typeof userId !== 'string') throw TypeError('userId is not a string');
    if (userId.length === 0) throw new LengthError('userId is empty');
    
    if (typeof eventId !== 'string') throw TypeError('eventId is not a string');
    if (eventId.length === 0 || eventId.trim() === '') throw new LengthError('eventId is empty')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)
            if (user.role !== 'admin') throw new Error('user is not able to update a notice')

            return Event.findById(eventId)
        })
        .then(event => {
            if (!event)
                throw new NotFoundError(`Event with id ${eventId} does not exist`)

            return Event.deleteOne({ _id: eventId })
        })
}
module.exports = deleteEvent