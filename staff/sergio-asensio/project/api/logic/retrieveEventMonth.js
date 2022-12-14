
const { errors: { LengthError, FormatError, NotFoundError, UnexpectedError } } = require('com')
const { User, Event } = require('../models')
/**
 * Retrieves all events
 * 
 * @param {string} userId The user id
 */
function retrieveEventMonth(userId, month) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new LengthError('userId is empty')
    if (typeof month !== 'string') throw new TypeError('month is not a string')
    if (!month.length) throw new LengthError('month does not exist')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)


            return Event.findOne({ month }).populate('user', '-email -password -__v').lean()
        })
        .then(event => {
            // const eventRetrieved = event[0]

            if (!event) {
                throw new NotFoundError(`event for month ${month} does not exist`)
            } else
                event.id = event._id.toString()
                delete event._id
                delete event.__v

            return event
        })
}

module.exports = retrieveEventMonth