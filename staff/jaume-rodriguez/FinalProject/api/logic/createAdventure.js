const { User, Adventure } = require('../models')
const {
    errors: { NotFoundError },
    validators: { validateUserId, validateTitle, validateIsMainAdventure }
} = require('com')

function createAdventure(userId, title, isMainAdventure) {
    validateUserId(userId)
    validateTitle(title)
    validateIsMainAdventure(isMainAdventure)

    let foundUser = null
    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError('User not registered')
            foundUser = user
            return Adventure.create({ creator: userId, title, isMainAdventure })
        })
        .then(() => {
            foundUser.gold -= 1000
            return foundUser.save()
        })
}

module.exports = createAdventure