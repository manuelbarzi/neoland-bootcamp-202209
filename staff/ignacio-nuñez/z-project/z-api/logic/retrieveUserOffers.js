const { errors: { NotFoundError },
    validators: { stringValidator }
} = require('com')
const { Users, Offers } = require('../models')
/**
 * Retrieves all user offers
 * 
 * @param {string} userId The user id
 */
module.exports = function retrieveCompanyOffers(userId) {
    stringValidator(userId, 'userId')

    return Users.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

            return Offers.find({ user: userId }).sort({ createDate: -1 }).populate('user', '-email -password -__v').select('-__v').lean()
        })
        .then(offers => {
            offers.forEach(offer => {
                offer.id = offer._id.toString()
                delete offer._id

                if (!offer.user.id) {

                    offer.user.id = offer.user._id.toString()
                    delete offer.user._id
                }
            })

            return offers
        })
}