const { User, Adventure, AdventurePlayed } = require("../models")

function playAdventure(userId, adventureId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof adventureId !== 'string') throw new TypeError('adventureId is not a string')
    if (!adventureId.length) throw new Error('adventureId is empty')

    let foundUser = null
    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)
            foundUser = user
            return Adventure.findById(adventureId)
        })
        .then(adventure => {
            if (!adventure)
                throw new Error(`adventure with id ${adventureId} does not exist`)

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