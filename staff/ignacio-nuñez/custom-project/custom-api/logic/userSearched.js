const context = require('./context')
const ObjectId = require('mongodb').ObjectId;

module.exports = function returnUser(userId, searchedUserId) {
    if (typeof userId !== 'string') throw new TypeError('id is not a string')
    if (typeof searchedUserId !== 'string') throw new TypeError('userId is not a string')

    const { db } = context

    const users = db.collection('users')

    return users.findOne({ _id: ObjectId(userId) })
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} dont exist`)

            return users.findOne({ _id: ObjectId(searchedUserId) })
                .then(user => {
                    if (!user) throw new Error(`user with id ${userId} dont exist`)

                    return user.name
                })
        })
    }