const { User, Adventure } = require('../models')
const {
    errors: { NotFoundError },
    validators: { validateUserId, validateAdventureId, validateTitle, validateIsMainAdventure }
} = require('com')

module.exports = function (userId, adventureId, title, isMainAdventure) {
    validateUserId(userId)
    validateAdventureId(adventureId)
    validateTitle(title)
    validateIsMainAdventure(isMainAdventure)

    return User.findById(userId).select('-password').lean()
        .then(user => {
            if (!user)
                throw new NotFoundError('User not registered')

            return Adventure.findById(adventureId).lean()
        })
        .then(adventure => {
            if (!adventure)
                throw new NotFoundError('Adventure does not exist')


            return Adventure
                .updateOne({ _id: adventureId }, { $set: { title, isMainAdventure } })
        })
        .then(() => { })
}