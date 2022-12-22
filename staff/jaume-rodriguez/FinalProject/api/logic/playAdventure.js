const { User, Adventure, AdventurePlayed } = require("../models")
const {
    errors: { NotFoundError },
    validators: { validateUserId, validateAdventureId }
} = require('com')

function playAdventure(userId, adventureId) {
    validateUserId(userId)
    validateAdventureId(adventureId)

    let foundCreator = null
    let foundUser = null
    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError('User not registered')

            foundUser = user
            return Adventure.findById(adventureId)
        })

        .then(adventure => {
            if (!adventure)
                throw new NotFoundError('Adventure does not exist')
            foundCreator = adventure
            let adventurePlayed = foundUser.adventuresPlayed.find(adventurePlayed => adventurePlayed.adventure.toString() === adventureId)

            if (adventurePlayed === undefined) {
                adventurePlayed = new AdventurePlayed({ adventure: adventureId })
                foundUser.adventuresPlayed.push(adventurePlayed)
            }
            adventurePlayed.lastStepPlayedTime = Date.now()
            adventurePlayed.stepsCompleted++
            foundUser.gold -= 200

            const totalSteps = adventure.steps.length // NOTE: This is why we need the adventure
            if (adventurePlayed.stepsCompleted >= totalSteps) {
                adventurePlayed.stepsCompleted = 0
                foundUser.exp += 3000
                adventurePlayed.timesCompleted++
                // NOTE: Given a quest that has been already completed, then we display the texts of all steps, but restart the progress
            }


            return foundUser.save()
        })
        .then(() => { })
}
module.exports = playAdventure