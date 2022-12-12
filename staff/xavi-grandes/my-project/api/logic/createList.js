const { User } = require('../models')
const { List } = require('../models')

module.exports = function (userId, title) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof title !== 'string') throw new TypeError('title is not a string')
    if (!title.length) throw new Error('title is empty')

    return User.findById(userId)
    .then(user => {
        if (!user)
            throw new Error(`user with id ${userId} does not exist`)

        return List.create({ user: userId, title })
    })
    .then(() => { })
    // preguntar a manu
}