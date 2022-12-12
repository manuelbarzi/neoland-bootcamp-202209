const {
    errors: { NotFoundError, ConflictError },
    validators: { stringValidator, languagesValidator, ofStudyValidator, ofExperienceValidator, knowledgeValidator, booleanValidator }
} = require('com')
const { Users, Offers } = require('../models')

module.exports = function updateOffer(userId, offerId, title, description, photo, languages, studies, experiences, knowledges, published) {
    stringValidator(userId, 'userId')
    stringValidator(offerId, 'offerId')
    if(title)stringValidator(title, 'title')
    if(description)stringValidator(description, 'description')
    if(photo)stringValidator(photo, 'photo')
    if(languages) languagesValidator(languages)
    if(studies) ofStudyValidator(studies)
    if(experiences) ofExperienceValidator(experiences)
    if (knowledges) knowledgeValidator(knowledges)
    if (typeof published === 'boolean') booleanValidator(published, 'published')

    return Users.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

            return Offers.findById(offerId)
        })
        .then(offer => {
            if (!offer) throw new NotFoundError(`offer with id ${offerId} does not exist`)

            if (offer.user.toString() !== userId) throw new ConflictError(`offer with id ${offerId} does not belong to user with id ${userId}`)

            const data = { createDate: new Date() }

            if (title) data.title = title
            if (description) data.description = description
            if (photo) data.photo = photo
            if (languages) data.languages = languages
            if (studies) data.studies = studies
            if (experiences) data.experiences = experiences
            if (experiences) data.experiences = experiences
            if (knowledges) data.knowledges = knowledges
            if (typeof published === 'boolean') data.published = published

            return Offers.findByIdAndUpdate(offerId, data)
        })
}
