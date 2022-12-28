const { User, Adventure, AdventurePlayed } = require("../models")
const {
    errors: { NotFoundError },
    validators: { validateUserId, validateAdventureId }
} = require('com')

function playAdventure(userId, adventureId) {
    validateUserId(userId)
    validateAdventureId(adventureId)

    let hasNewUnicPlayer = false
    let hasBeenCompleted = false
    let hasFinishedAdventure = false
    let foundUser = null
    let foundAdventure = null
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
            foundAdventure = adventure
            let adventurePlayed = foundUser.adventuresPlayed.find(adventurePlayed => adventurePlayed.adventure.toString() === adventureId)

            if (adventurePlayed === undefined) {
                adventurePlayed = new AdventurePlayed({ adventure: adventureId })
                foundUser.adventuresPlayed.push(adventurePlayed)
                hasNewUnicPlayer = true
            }
            adventurePlayed.lastStepPlayedTime = Date.now()
            adventurePlayed.stepsCompleted++
            foundUser.gold -= 200

            const totalSteps = adventure.steps.length // NOTE: This is why we need the adventure
            if (adventurePlayed.stepsCompleted >= totalSteps) {
                adventurePlayed.stepsCompleted = 0
                foundUser.exp += 3000
                hasFinishedAdventure = true
                adventurePlayed.timesCompleted++
                hasBeenCompleted = true
                // NOTE: Given a quest that has been already completed, then we display the texts of all steps, but restart the progress
            }

            return foundUser.save()
        })

        .then(() => {
            return User.findById(foundAdventure.creator._id)
        })

        .then(creatorUser => {
            if (!creatorUser)
                throw new NotFoundError('cretor user not registered')
            else if (hasFinishedAdventure === true)
                creatorUser.gold += 25
            return creatorUser.save()
        })

        .then(() => {
            return Adventure.findById(adventureId)
        })

        .then(adventure => {
            if (!adventure)
                throw new NotFoundError('adventure does not exist')
            else if (hasNewUnicPlayer === true)
                adventure.uniquePlayersPlaying++
            else if (hasBeenCompleted === true)
                adventure.goldCollected += 25
            return adventure.save()
        })
}
module.exports = playAdventure