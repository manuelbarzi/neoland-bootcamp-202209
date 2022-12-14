const { ObjectId } = require('mongodb')
const { errors: { FormatError } } = require('com')
const { User, List } = require('../models')
/**
 * Retrieves all lists (from the user)
 * 
 * @param {string} userId The user id
 * @param {string} listName The name of the list
 */
module.exports = function retrieveLists(userId, listName) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new FormatError('userId is empty')

    if (typeof listName !== 'string') throw new TypeError('listName is not a string')
    if (!listName.length) throw new Error ('listName is empty')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

               return List.findOne({ title: listName }).lean()               
        })
        .then(list => {
                list.id = list._id.toString()
                delete list.id
                delete list.user
                delete list.__v
                
                return list
            })
}