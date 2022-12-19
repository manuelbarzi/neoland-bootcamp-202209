const { errors: { LengthError, FormatError, NotFoundError, UnexpectedError } } = require('com')
const { User } = require('../models')
/**
 * Retrieves all events
 * 
 * @param {string} userId The user id
 */
function retrieveUsers(userId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new LengthError('userId is empty')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)
            if (user.role !== 'admin') throw new Error('user is not able to see the users')


            return User.find().sort({ email: 1 }).lean()
        })
        .then(users => {
            users.forEach(user => {
                user.id = user._id.toString()
                delete user._id
                delete user.__v   
                
                delete user.password
        
            })

            return users
        
        })
}

module.exports = retrieveUsers