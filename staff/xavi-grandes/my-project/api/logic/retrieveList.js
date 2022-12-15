const { ObjectId } = require('mongodb')
const { errors: { FormatError } } = require('com')
const { User, List } = require('../models')
/**
 * Retrieves all lists (from the user)
 * 
 * @param {string} userId The user id
 * @param {string} listId The name of the list
 */
module.exports = function(userId, listId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new FormatError('userId is empty')

    if (typeof listId !== 'string') throw new TypeError('listId is not a string')
    if (!listId.length) throw new Error ('listId is empty')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

               return List.findById(listId).lean()               
        })
        .then(list => {
                list.id = list._id.toString()
                delete list.id
                delete list.user
                delete list.__v
                
                return list
            })
}