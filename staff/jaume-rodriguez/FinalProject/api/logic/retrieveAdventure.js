const { User, Adventure } = require('../models')

function retrieveAdventure(userId, adventureId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

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