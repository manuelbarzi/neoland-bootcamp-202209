const { errors: { NotFoundError, ConflictError },
    validators: { stringValidator }
} = require('com')
const { Users, Offers } = require('../models')
/**
 * Retrieves one user offer
 * 
 * @param {string} userId The user id
 *  @param {string} offerId The offer id
 */
module.exports = function retrieveOfferToUpdate(userId, offerId) {
    stringValidator(userId, 'userId')
    stringValidator(offerId, 'offerId')

    return Users.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

            return Offers.findById(offerId).select('-__v').lean()
        })
        .then(offer => {
            if (!offer) throw new NotFoundError(`offer with id ${offerId} does not exist`)

            if (offer.user.toString() !== userId) throw new ConflictError(`offer with id ${offerId} does not belong to user with id ${userId}`)

            return offer
        })
}