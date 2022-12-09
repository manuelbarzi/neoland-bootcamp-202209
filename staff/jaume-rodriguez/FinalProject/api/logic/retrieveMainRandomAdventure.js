//TODO: Filter by adventuresPlayed
const { User, Adventure } = require('../models')

function retrieveMainRandomAdventure(userId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

            return Adventure
                .find({ isMainAdventure: true })
                .count()
                .lean()
        })
        .then(adventures => {
            if (!adventures)
                throw new Error(`user with id ${userId} does not exist`)

            const random = Math.floor(Math.random() * adventures)

            return Adventure
                .findOne({ isMainAdventure: true })
                .skip(random)
                .populate('creator', '-email -password')
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

module.exports = retrieveMainRandomAdventure