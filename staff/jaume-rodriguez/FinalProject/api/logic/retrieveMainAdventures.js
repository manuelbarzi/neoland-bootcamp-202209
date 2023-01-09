const { User, Adventure } = require('../models')
const {
    errors: { NotFoundError },
    validators: { validateUserId }
} = require('com')

function retrieveMainAdventures(userId) {
    validateUserId(userId)

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError('User not registered')

            return Adventure
                .find({ isMainAdventure: "main" })
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