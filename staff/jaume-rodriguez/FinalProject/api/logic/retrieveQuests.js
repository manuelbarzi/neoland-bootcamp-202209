const { User, Quest } = require('../models')
const {
    errors: { NotFoundError },
    validators: { validateUserId }
} = require('com')

function retrieveQuests(userId) {
    validateUserId(userId)

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError('User not registered')

            return Quest
                .find()
                .populate('creator', '-email -password')
                .select('-__v')
                .lean()
        })
        .then(quests => {
            quests.forEach(quest => {
                quest.id = quest._id.toString()
                delete quest._id

                if (!quest.creator.id) {
                    quest.creator.id = quest.creator._id.toString()
                    delete quest.creator._id
                }
            })

            return quests
        })
}

module.exports = retrieveQuests