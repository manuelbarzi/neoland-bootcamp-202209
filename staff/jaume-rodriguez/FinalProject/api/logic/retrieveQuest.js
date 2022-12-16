const { User, Quest } = require('../models')

function retrieveQuest(userId, questId) {
    console.log("reqtrieveQuest", userId, questId);
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

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