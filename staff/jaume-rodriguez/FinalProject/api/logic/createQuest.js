const { User, Quest } = require('../models')

function createQuest(userId, text, isMainQuest) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof text !== 'string') throw new TypeError('text is not a string')
    if (!text.length) throw new Error('text is empty')
    if (typeof isMainQuest !== 'boolean') throw new TypeError('isMainQuest is not a boolean')
    if (isMainQuest !== true && isMainQuest !== false) throw new Error('invalid isMainQuest')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

            return Quest.create({ creator: userId, text, isMainQuest })
        })
        .then(() => { })
}

module.exports = createQuest