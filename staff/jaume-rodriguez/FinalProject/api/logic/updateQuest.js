const { User, Quest } = require('../models')

module.exports = function (userId, questId, text, isMainQuest) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof questId !== 'string') throw new TypeError('questId is not a string')
    if (!questId.length) throw new Error('questId is empty')
    if (typeof text !== 'string') throw new TypeError('text is not a string')
    if (!text.length) throw new Error('text is empty')
    if (typeof isMainQuest !== 'boolean') throw new TypeError('isMainQuest is not a boolean')
    if (isMainQuest !== true && isMainQuest !== false) throw new Error('invalid isMainQuest')

    return User.findById(userId).select('-password').lean()
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

            return Quest.findById(questId).lean()
        })
        .then(quest => {
            if (!quest)
                throw new Error(`quest with id ${questId} does not exist`)


            return Quest
                .updateOne({ _id: questId }, { $set: { text, isMainQuest } })
        })
        .then(() => { })
}