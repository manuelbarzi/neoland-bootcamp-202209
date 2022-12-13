const { List } = require('../models')
const { Product } = require('../models')

module.exports = function (listId, title) {
    if (typeof listId !== 'string') throw new TypeError('listId is not a string')
    if (!listId.length) throw new Error('listId is empty')
    if (typeof title !== 'string') throw new TypeError('title is not a string')
    if (!title.length) throw new Error('title is empty')

    return List.findById(listId)
    .then(user => {
        if (!user)
            throw new Error(`user with id ${listId} does not exist`)

        return Product.create({ user: listId, title })
    })
    .then(() => { })
}