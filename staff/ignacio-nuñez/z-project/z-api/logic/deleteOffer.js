const {
    errors: { NotFoundError, ConflictError },
    validators: { stringValidator }
} = require('com')
const { Users, Offers } = require('../models')

module.exports = function deleteWorkOffer(userId, offerId) {
    stringValidator(userId, 'userId')
    stringValidator(offerId, 'offerId')

    return Users.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

            return Offers.findById(offerId)
        })
        .then(offer => {
            if (!offer) throw new NotFoundError(`offer with id ${offerId} does not exist`)

            if (offer.user.toString() !== userId) throw new ConflictError(`offer with id ${offerId} does not belong to user with id ${userId}`)

            return Offers.findByIdAndDelete(offerId)
        })
}
