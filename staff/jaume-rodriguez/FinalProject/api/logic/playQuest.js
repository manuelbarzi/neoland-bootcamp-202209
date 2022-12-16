const { User, Quest, QuestPlayed } = require("../models")
const { GAME_CONSTANTS } = require("../shared");

function playQuest(userId, questId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof questId !== 'string') throw new TypeError('questId is not a string')
    if (!questId.length) throw new Error('questId is empty')

    let foundUser = null
    return User.findById(userId)
        .then(user => {
            if (!user) {
                throw new Error(`user with id ${userId} does not exist`)
            }
            foundUser = user

            return Quest.findById(questId)
        })
        .then(quest => {
            if (!quest) {
                throw new Error(`quest with id ${quest} does not exist`)
            }

            foundUser.gold += 100
            foundUser.exp += 50
            const currentTimeMilliseconds = Date.now()
            const timeLapsed = currentTimeMilliseconds - foundUser.lastQuestPlayedTime

            if (timeLapsed < GAME_CONSTANTS.dailyQuestCooldown) {
                throw new Error(`not enough time lapsed since last quest played`)
            }

            const index = foundUser.questsPlayed.findIndex(questPlayed => questPlayed.quest.toString() === questId)
            if (index !== -1) {
                foundUser.questsPlayed[index].timesCompleted++
            } else {
                const newQuestPlayed = new QuestPlayed({ quest: questId })
                foundUser.questsPlayed.push(newQuestPlayed)
            }

            foundUser.lastQuestPlayedTime = currentTimeMilliseconds
            foundUser.lastQuestPlayedText = quest.text
            console.log("quest.text", quest.text);

            return foundUser.save()
        })
        .then(() => { })
}
module.exports = playQuest