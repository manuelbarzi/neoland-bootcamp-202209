const { ObjectId } = require('mongodb')
const { errors: { FormatError } } = require('com')
const { User, List } = require('../models')
/**
 * Retrieves all lists (from the user)
 * 
 * @param {string} userId The user id
 */
module.exports = function retrieveLists(userId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new FormatError('userId is empty')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

                return List.find({ user: ObjectId(userId) }).lean()
        })
        .then(lists => {
            lists.forEach(list => {
                list.id = list._id.toString()
                delete list._id
                delete list.user
                delete list.__v
            })

            return lists
        })
}