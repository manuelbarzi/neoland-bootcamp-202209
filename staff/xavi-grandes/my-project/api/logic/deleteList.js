const { ObjectId } = require('mongodb')
// const context = require('./context')

module.exports = function (userId, listId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof listId !== 'string') throw new TypeError('listId is not a string')
    if (!listId.length) throw new Error('listId is empty')

    const { db } = context
    const users = db.collection('users')
    const lists = db.collection('lists')

    return users.findOne({ _id: ObjectId(userId) })
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

            return lists.findOne({ _id: ObjectId(listId) })
        })
        .then(list => {
            if (!list)
                throw new Error(`list with id ${listId} does not exist`)

            if (list.user.toString() !== userId)
                throw new Error(`list with id ${listId} does not belong to user with id ${userId}`)


            return lists.deleteOne({ _id: ObjectId(listId) })
        })
        .then(result => {
            const { acknowledged } = result

            if (!acknowledged) throw new Error(`could not delete post with id ${postId}`)
         })
}