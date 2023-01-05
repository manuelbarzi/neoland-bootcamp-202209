const { ObjectId } = require('mongodb')
const context = require('./context')

module.exports = function searchUsers(name, userId) {
    if (typeof name !== 'string') throw new TypeError('name is not a string')
    if (!name.length) throw new TypeError('name is empty')
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new TypeError('userId is empty')

    const { db } = context

    const users = db.collection('users')

    users.findOne({ _id: ObjectId(userId) })
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} dont exist`)
        })

    return users.find({ _id: { $ne: ObjectId(userId) }, name: {$regex: name, $options : 'i'} }).toArray()
        .then(users => {
            users.forEach(user => {
                user.id = user._id.toString()
                
                delete user._id
                delete user.password
                delete user.email
            })
            return users
        })
}