const { User, Quest, QuestPlayed } = require("../models")
const { GAME_CONSTANTS } = require("../shared");
const {
    errors: { NotFoundError },
    validators: { validateUserId, validateQuestId }
} = require('com')

function playQuest(userId, questId) {
    validateUserId(userId)
    validateQuestId(questId)

    let reward = 0
    let foundUser = null
    return User.findById(userId)
        .then(user => {
            if (!user) {
                throw new NotFoundError('User not registered')
            }
            foundUser = user

            return Quest.findById(questId)
        })
        .then(quest => {
            if (!quest) {
                throw new NotFoundError('Quest does not exist')
            }

            dailyQuestReward = Math.floor(Math.random() * 101)

            if (dailyQuestReward <= 1) {
                foundUser.gold += 50
                foundUser.combatPoints += 3
            } else if (dailyQuestReward <= 29) {
                foundUser.gold += 25
                foundUser.combatPoints += 2
            } else {
                foundUser.gold += 10
                foundUser.combatPoints += 1
            }
            reward = dailyQuestReward

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
        .then(() => { return reward })
}
module.exports = playQuest