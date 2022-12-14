
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

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)


            return Event.find({ month }).populate('user', '-email -password -__v').lean()
        })
        .then(event => {
            const eventRetrieve = event[0]

                eventRetrieve.id = eventRetrieve._id.toString()
                delete eventRetrieve._id
                delete eventRetrieve.__v

            return eventRetrieve
        })
}

module.exports = retrieveEventMonth