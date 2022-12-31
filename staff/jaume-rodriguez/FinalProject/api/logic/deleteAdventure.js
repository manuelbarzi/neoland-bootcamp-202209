const { User, Adventure } = require('../models')
const {
    errors: { NotFoundError, UnexpectedError },
    validators: { validateUserId, validateAdventureId }
} = require('com')

module.exports = function (userId, adventureId) {
    validateUserId(userId)
    validateAdventureId(adventureId)

    return User
        .findById(userId)
        .then((user) => {
            if (!user) throw new NotFoundError('User not registered')
            foundUser = user
            return Adventure.findById(adventureId).lean()
        })
        .then((adventure) => {
            if (!adventure) throw new NotFoundError('Adventure does not exist')

            if (adventure.creator.toString() !== userId)
                throw new NotFoundError('Adventure does not belong to this user')

            const filter = { active: true }
            return Adventure.updateOne(filter, { active: false });
        })
        .then(result => {
            const { acknowledged } = result

            if (!acknowledged) throw new UnexpectedError(`could not delete adventure with id ${adventureId}`)
        })
        .then(() => {
            return User.findById(userId)
        })
        .then((user) => {
            if (!user) throw new NotFoundError('User not registered')
            user.gold -= 100

            return user.save()
        })
};