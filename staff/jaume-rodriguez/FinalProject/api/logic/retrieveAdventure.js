const { User, Adventure } = require('../models')
const {
    errors: { NotFoundError },
    validators: { validateUserId, validateAdventureId }
} = require('com')

function retrieveAdventure(userId, adventureId) {
    validateUserId(userId)
    validateAdventureId(adventureId)

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError('User not registered')

            return Adventure
                .findById(adventureId)
                .populate('creator', '-email -password -questsPlayed -adventuresPlayed -__v')
                .populate('steps', '-__v -isMainQuest -isAdventureStep')
                .select('-__v')
                .lean()
        })
        .then(adventure => {
            adventure.id = adventure._id.toString()
            delete adventure._id

            if (!adventure.creator.id) {
                adventure.creator.id = adventure.creator._id.toString()
                delete adventure.creator._id
            }

            return adventure
        })
}

module.exports = retrieveAdventure