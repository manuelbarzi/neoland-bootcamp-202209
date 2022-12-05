const {
    errors: { FormatError }
} = require('com')
const { User } = require('../models')
const searchPlayer = require('./searchPlayer')


/**
 * enable Search Game bool
 * 
 * @param {userId} userId The user id 
 * 
 */

function enableSearchGame(userId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new FormatError('userId is empty')

    return User.findOneAndUpdate({ _id: userId }, {isSearchingGame: true})
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)
            searchPlayer(userId)
        })
}

module.exports = enableSearchGame