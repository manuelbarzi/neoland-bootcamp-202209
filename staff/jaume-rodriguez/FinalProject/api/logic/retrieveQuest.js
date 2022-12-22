const { User, Quest } = require('../models')
const {
    errors: { NotFoundError },
    validators: { validateUserId, validateQuestId }
} = require('com')

function retrieveQuest(userId, questId) {
    validateUserId(userId)
    validateQuestId(questId)

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError('User not registered')

            return Quest
                .findById(questId)
                .populate('creator', '-email -password -questsPlayed -adventuresPlayed -__v')
                .select('-__v')
                .lean()
        })
        .then(quest => {
            quest.id = quest._id.toString()
            delete quest._id

            if (!quest.creator.id) {
                quest.creator.id = quest.creator._id.toString()
                delete quest.creator._id
            }

            return quest
        })
}

module.exports = retrieveQuest