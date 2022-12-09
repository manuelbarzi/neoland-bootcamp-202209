const { User, Adventure, Quest } = require('../models')

function createAdventureStep(userId, adventureId, text) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')
    if (typeof adventureId !== 'string') throw new TypeError('adventureId is not a string')
    if (!adventureId.length) throw new Error('adventureId is empty')
    if (typeof text !== 'string') throw new TypeError('text is not a string')
    if (!text.length) throw new Error('text is empty')

    let foundAdventure = null;
    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

            return Adventure.findById(adventureId)
        })
        .then(adventure => {
            if (!adventure)
                throw new Error(`adventure with id ${adventureId} does not exist`)

            // TODO: Check that adventure.creator === userId
            foundAdventure = adventure;
            return Quest.create({ creator: userId, text, isAdventureStep: true })
        })
        .then(result => {
            foundAdventure.steps.push(result.id)

            return foundAdventure.save()
        })
}
module.exports = createAdventureStep