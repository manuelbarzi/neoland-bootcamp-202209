const { User, Quest } = require('../models')
const {
    errors: { NotFoundError },
    validators: { validateUserId, validateQuestId, validateText, validateIsMainQuest }
} = require('com')

module.exports = function (userId, questId, text, isMainQuest) {
    validateUserId(userId)
    validateQuestId(questId)
    validateText(text)
    validateIsMainQuest(isMainQuest)

    return User.findById(userId).select('-password').lean()
        .then(user => {
            if (!user)
                throw new NotFoundError('User not registered')

            return Quest.findById(questId).lean()
        })
        .then(quest => {
            if (!quest)
                throw new NotFoundError(`quest with id ${questId} does not exist`)


            return Quest
                .updateOne({ _id: questId }, { $set: { text, isMainQuest } })
        })
        .then(() => { })
}