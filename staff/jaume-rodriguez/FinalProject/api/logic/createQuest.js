const { User, Quest } = require('../models')
const {
    errors: { NotFoundError },
    validators: { validateUserId, validateText, validateIsMainQuest }
} = require('com')

function createQuest(userId, text, isMainQuest) {
    validateUserId(userId)
    validateText(text)
    validateIsMainQuest(isMainQuest)

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError('User not registered')

            return Quest.create({ creator: userId, text, isMainQuest })
        })
        .then(() => { })
}

module.exports = createQuest