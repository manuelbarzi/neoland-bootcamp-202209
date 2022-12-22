const { User, Quest, QuestPlayed } = require("../models")
const { GAME_CONSTANTS } = require("../shared");
const {
    errors: { NotFoundError },
    validators: { validateUserId, validateQuestId }
} = require('com')

function playQuest(userId, questId) {
    validateUserId(userId)
    validateQuestId(questId)

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