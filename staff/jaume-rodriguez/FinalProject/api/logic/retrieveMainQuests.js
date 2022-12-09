const { User, Quest } = require('../models')

function retrieveMainQuests(userId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

            return Quest
                .find({ isMainQuest: true, isAdventureStep: false })
                .populate('creator', '-email -password')
                .select('-__v')
                .lean()
        })
        .then(quests => {
            quests.forEach(quest => {
                quest.id = quest._id.toString()
                delete quest._id

                if (!quest.creator.id) {
                    quest.creator.id = quest.creator._id.toString()
                    delete quest.creator._id
                }
            })

            return quests
        })
}

module.exports = retrieveMainQuests