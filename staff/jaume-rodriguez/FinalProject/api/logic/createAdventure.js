const { User, Adventure } = require('../models')

function createAdventure(userId, title, isMainAdventure) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof title !== 'string') throw new TypeError('title is not a string')
    if (!title.length) throw new Error('title is empty')
    if (typeof isMainAdventure !== 'string') throw new TypeError('isMainAdventure is not a string')
    if (isMainAdventure !== "main" && isMainAdventure !== "world") throw new Error('invalid isMainAdventure')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

            return Adventure.create({ creator: userId, title, isMainAdventure })
        })
        .then(() => { })
}

module.exports = createAdventure