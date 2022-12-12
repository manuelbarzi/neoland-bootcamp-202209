const { ObjectId } = require('mongodb')
const { User, List} = require('../models')

module.exports = function (userId, listId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof listId !== 'string') throw new TypeError('listId is not a string')
    if (!listId.length) throw new Error('listId is empty')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

            return List.findOne({ _id: ObjectId(listId) })
        })
        .then(list => {
            if (!list)
                throw new Error(`list with id ${listId} does not exist`)

            if (list.user.toString() !== userId)
                throw new Error(`list with id ${listId} does not belong to user with id ${userId}`)


            return List.deleteOne({ _id: ObjectId(listId) })
        })
        .then(result => {
            const { acknowledged } = result

            if (!acknowledged) throw new Error(`could not delete post with id ${listId}`)
         })
}