
const { errors: { LengthError, FormatError, NotFoundError, UnexpectedError } } = require('com')
const { User, Event } = require('../models')
/**
 * Retrieves all events
 * 
 * @param {string} userId The user id
 */
function retrieveEventMonthNumber(userId, month) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new LengthError('userId is empty')
    if (typeof month !== 'number') throw new TypeError('month is not a number')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

            const year = new Date().getFullYear()

            const startDate = new Date(year, month - 1, 1)
            const endDate = new Date(year, month, 1)

            return Event.findOne({ date: { $gte: startDate, $lt: endDate } })
                .populate('user', '-email -password -__v')
                .populate('participants', 'name')
                .lean()
        })
        .then(event => {
            if (!event) {
                throw new NotFoundError(`event for month ${month} does not exist`)
            }
            
            event.participants.forEach(participant => {
                participant.id = participant._id.toString()

                delete participant._id
            })

            event.id = event._id.toString()
            delete event._id
            delete event.__v

            return event
        })
}

module.exports = retrieveEventMonthNumber