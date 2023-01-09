const { User, Adventure, Quest } = require('../models')
const {
    errors: { NotFoundError },
    validators: { validateUserId, validateAdventureId, validateText }
} = require('com')

function createAdventureStep(userId, adventureId, text) {
    validateUserId(userId)
    validateAdventureId(adventureId)
    validateText(text)

    let foundAdventure = null;
    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError('User not registered')

            return Adventure.findById(adventureId)
        })
        .then(adventure => {
            if (!adventure)
                throw new NotFoundError('Adventure does not exist')

            foundAdventure = adventure;
            return Quest.create({ creator: userId, text, isAdventureStep: true })
        })
        .then(result => {
            foundAdventure.steps.push(result.id)

            return foundAdventure.save()
        })
}
module.exports = createAdventureStep