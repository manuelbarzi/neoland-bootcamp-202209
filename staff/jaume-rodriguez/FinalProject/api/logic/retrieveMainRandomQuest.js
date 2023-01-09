const { User, Quest } = require('../models')
const {
    errors: { NotFoundError },
    validators: { validateUserId }
} = require('com')

function retrieveMainRandomQuest(userId) {
    validateUserId(userId)

    return User.findById(userId).populate('questsPlayed')
        .then(user => {
            if (!user)
                throw new NotFoundError('User not registered')

            return Quest
                .find({ isMainQuest: true, isAdventureStep: false })
                .count()
                .lean()
                .then(quests => {
                    if (!quests)
                        throw new NotFoundError('Quest does not exist')

                    const random = Math.floor(Math.random() * quests)

                    return Quest
                        .findOne({ isMainQuest: true, isAdventureStep: false })
                        .skip(random)
                        .populate('creator', '-email -password')
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
        })

}

module.exports = retrieveMainRandomQuest