const { User, Adventure } = require('../models')
const {
    errors: { NotFoundError },
    validators: { validateUserId, validateTitle, validateIsMainAdventure }
} = require('com')

function createAdventure(userId, title, isMainAdventure) {
    validateUserId(userId)
    validateTitle(title)
    validateIsMainAdventure(isMainAdventure)

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError('User not registered')

            return Adventure.create({ creator: userId, title, isMainAdventure })
        })
        .then(() => { })
}

module.exports = createAdventure