const { User, Adventure } = require('../models')

function retrieveMainAdventures(userId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new Error('userId is empty')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new Error(`user with id ${userId} does not exist`)

            return Adventure
                .find({ isMainAdventure: true })
                .populate('creator', '-email -password')
                .select('-__v')
                .lean()
        })
        .then(adventures => {
            adventures.forEach(adventure => {
                adventure.id = adventure._id.toString()
                delete adventure._id

                if (!adventure.creator.id) {
                    adventure.creator.id = adventure.creator._id.toString()
                    delete adventure.creator._id
                }
            })

            return adventures
        })
}

module.exports = retrieveMainAdventures