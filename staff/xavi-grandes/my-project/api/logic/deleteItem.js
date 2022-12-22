const { ObjectId } = require('mongodb')
const { Item } = require('../models')

module.exports = function (itemId) {
    if (typeof itemId !== 'string') throw new TypeError('itemId is not a string')
    if (!itemId.length) throw new Error('itemId is empty')

    return Item.findById(itemId)
        .then(item => {
            if (!item)
                throw new Error(`item with id ${itemId} does not exist`)

            return Item.deleteOne({ _id: ObjectId(itemId) })
        })
        .then(result => {
            const { acknowledged } = result

            if (!acknowledged) throw new Error(`could not delete item with id ${itemId}`)
         })
}