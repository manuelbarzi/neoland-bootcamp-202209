const { errors: { NotFoundError },
    validators: { stringValidator }
} = require('com')
const { Users, Offers } = require('../models')
const ofExperience = require('../models/schemas/ofExperience')
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

            return Offers.find({ user: userId }).sort({ createDate: -1 }).populate('user', '-email -password -__v').select('-description -languages -studies -experiences -knowledges -__v').lean()
        })
        .then(offers => {
            offers.forEach(offer => {
                if (offer.languages) {
                    offer.languages.forEach(language => {
                        language.id = language._id.toString()
                        delete language._id
                    })
                }
                if (offer.experiences) {
                    offer.experiences.forEach(experience => {
                        experience.id = experience._id.toString()
                        delete experience._id
                    })
                }
                if (offer.studies) {
                    offer.studies.forEach(study => {
                        study.id = study._id.toString()
                        delete study._id
                    })
                }
                if (!offer.user.id) {
                    offer.user.id = offer.user._id.toString()
                    delete offer.user._id
                }

                offer.id = offer._id.toString()
                delete offer._id
            })

            return offers
        })
}