const {
    errors: { NotFoundError, ConflictError },
    validators: { stringValidator, languagesValidator, ofStudyValidator, ofExperienceValidator }
} = require('com')
const { Users, Offers } = require('../models')

module.exports = function updateOffer(userId, offerId, title, description, photo, languages, studies, experiences) {
    stringValidator(userId, 'userId')
    stringValidator(offerId, 'offerId')
    stringValidator(title, 'title')
    stringValidator(description, 'description')
    stringValidator(photo, 'photo')
    if(languages) languagesValidator(languages)
    if(studies) ofStudyValidator(studies)
    if(experiences) ofExperienceValidator(experiences)

    return Users.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

            return Offers.findById(offerId)
        })
        .then(offer => {
            if (!offer) throw new NotFoundError(`offer with id ${offerId} does not exist`)

            if (offer.user.toString() !== userId) throw new ConflictError(`offer with id ${offerId} does not belong to user with id ${userId}`)

            return Offers.findByIdAndUpdate(offerId, {title, description, createDate: new Date(), photo, languages, studies, experiences})
        })
}
