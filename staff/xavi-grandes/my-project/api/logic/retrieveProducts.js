const { ObjectId } = require('mongodb')
const { errors: { FormatError } } = require('com')
const { List, Item } = require('../models')
/**
 * Retrieves all lists (from the user)
 * 
 * @param {string} listId The user id
 */
module.exports = function retrieveProducts(listId) {
    if (typeof listId !== 'string') throw new TypeError('listId is not a string')
    if (!listId.length) throw new FormatError('listId is empty')

    return List.findById(listId)
        .then(list => {
            if (!list)
                throw new Error(`list with id ${listId} does not exist`)

                return Item.find({ list: ObjectId(listId) }).lean()               
        })
        .then(items => {
            items.forEach(item => {
                item.id = item._id.toString()
                delete item._id
                delete item.id
                delete item.__v
            })

            return items
        })
}