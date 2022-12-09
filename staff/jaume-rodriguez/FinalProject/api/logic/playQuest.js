const { User, QuestPlayed } = require("../models")

function addQuestPlayedToUser(userId, questId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof questId !== 'string') throw new TypeError('questId is not a string')
    if (!questId.length) throw new Error('questId is empty')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

            //TODO: Check that questId exists

            const index = user.questsPlayed.findIndex(questPlayed => questPlayed.quest.toString() === questId)

            if (index !== -1) {
                user.questsPlayed[index].timesCompleted++
            } else {
                const newQuestPlayed = new QuestPlayed({ quest: questId })

                user.questsPlayed.push(newQuestPlayed)
            }

            return user.save()
        })
        .then(() => { })
}
module.exports = addQuestPlayedToUser