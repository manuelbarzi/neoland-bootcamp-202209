const { ObjectId } = require('mongodb')
const { errors: { FormatError } } = require('com')
const { Item } = require('../models')
/**
 * Retrieves all lists (from the user)
 * 
 * @param {string} itemId The user id
 */
module.exports = function(itemId, itemStatus) {
    if (typeof itemId !== 'string') throw new TypeError('itemId is not a string')
    if (!itemId.length) throw new FormatError('itemId is empty')
    if (typeof itemStatus !== "string") throw new TypeError("itemStatus is not a string");
    if (!itemStatus.length) throw new Error("itemStatus is empty");

    return Item.findById(itemId)
        .then(item => {
            if (!item)
                throw new Error(`item with id ${itemId} does not exist`)

            if (itemStatus === 'false'){
                isSet = true
            }
            if (itemStatus === 'true'){
                isSet = false
            }

               return Item.findById(itemId).updateOne({$set: { status: isSet } })              
        })
}