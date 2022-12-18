const { User, Adventure } = require('../models')

module.exports = function (userId, adventureId, title, isMainAdventure) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof adventureId !== 'string') throw new TypeError('adventureId is not a string')
    if (!adventureId.length) throw new Error('adventureId is empty')
    if (typeof title !== 'string') throw new TypeError('title is not a string')
    if (!title.length) throw new Error('title is empty')
    if (typeof isMainAdventure !== 'string') throw new TypeError('isMainAdventure is not a string')
    if (isMainAdventure !== "main" && isMainAdventure !== "world") throw new Error('invalid isMainAdventure')

    return User.findById(userId).select('-password').lean()
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

            return Adventure.findById(adventureId).lean()
        })
        .then(adventure => {
            if (!adventure)
                throw new Error(`adventure with id ${adventureId} does not exist`)


            return Adventure
                .updateOne({ _id: adventureId }, { $set: { title, isMainAdventure } })
        })
        .then(() => { })
}