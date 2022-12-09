//TODO: Randomize must be done when 2 or more quests have same timesCompleted value
const { User, Quest } = require('../models')

function retrieveMainRandomQuest(userId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')

    return User.findById(userId).populate('questsPlayed')
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)


            const questPlayedIds = user.questsPlayed.map(questPlayed => questPlayed.quest)

            return Quest.find({ _id: { $not: { $in: questPlayedIds } } })
                .then(quests => {
                    //Note: quests contains an array with all the quests not played by the user
                    //Note: not all quests are completed
                    if (quests.length > 0) {
                        const randomIndex = Math.floor(Math.random() * quests.length)

                        return quests[randomIndex]


                    } else {    //Note: all quests are played
                        let indexOfQuestLessPlayed = 0
                        let lessTimesCompleted = user.questsPlayed[0].timesCompleted

                        user.questsPlayed.forEach((quest, index) => {
                            if (quest.timesCompleted < lessTimesCompleted) {
                                indexOfQuestLessPlayed = index
                                lessTimesCompleted = quest.timesCompleted
                            }
                        })

                        return Quest.findById(user.questsPlayed[indexOfQuestLessPlayed].quest)
                    }
                })
        })

}

module.exports = retrieveMainRandomQuest