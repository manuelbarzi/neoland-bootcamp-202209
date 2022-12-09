//TODO: Filter by questsPlayed
const { User, Quest } = require('../models')

function retrieveWorldRandomQuest(userId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')

    return User.findById(userId).populate('questsPlayed')
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

            return Quest
                .find({ isMainQuest: false, isAdventureStep: false })
                .count()
                .lean()
                .then(quests => {
                    if (!quests)
                        throw new Error(`user with id ${userId} does not exist`)

                    const random = Math.floor(Math.random() * quests)

                    return Quest
                        .findOne({ isMainQuest: false, isAdventureStep: false })
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

module.exports = retrieveWorldRandomQuest