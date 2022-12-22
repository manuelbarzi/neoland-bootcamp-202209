const { User, Quest, Adventure } = require('../models')

const {
    errors: { NotFoundError, UnexpectedError },
    validators: { validateUserId, validateAdventureId }
} = require('com')

module.exports = function (userId, adventureId, questId) {
    validateUserId(userId)
    validateAdventureId(adventureId)

    return User
        .findById(userId)
        .then((user) => {
            if (!user) throw new NotFoundError('User not registered')

            return Quest.findById(questId).lean()
        })
        .then((quest) => {
            if (!quest) throw new NotFoundError('Quest does not exist')

            if (quest.creator.toString() !== userId)
                throw new NotFoundError('Quest does not belong to this user')

            return Quest.deleteOne({ _id: questId });
        })
        .then(result => {
            const { acknowledged } = result

            if (!acknowledged) throw new UnexpectedError(`could not delete Quest with id ${questId}`)

            return Adventure.findById(adventureId).lean()
        })
        .then(adventure => {
            if (!adventure)
                throw new UnexpectedError(`could not delete adventure with id ${adventureId}`)

            const index = adventure.steps.findIndex(steps => steps.quest.toString() === questId)
            return Adventure.steps[index].deleteOne({ _id: questId });
        })
        .then(result => {
            const { acknowledged } = result

            if (!acknowledged) throw new UnexpectedError(`could not delete Step with id ${questId}`)
        })
};