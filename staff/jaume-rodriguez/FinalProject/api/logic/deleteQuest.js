const { User, Quest } = require('../models')
const {
    errors: { NotFoundError, UnexpectedError },
    validators: { validateUserId, validateQuestId }
} = require('com')

module.exports = function (userId, questId) {
    validateUserId(userId)
    validateQuestId(questId)

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

            if (!acknowledged) throw new UnexpectedError(`could not delete adventure with id ${adventureId}`)
        })
};