const {
    errors: { NotFoundError, ConflictError },
    validators: { stringValidator, languagesValidator, ofExperienceValidator, ofStudyValidator, knowledgeValidator }
} = require('com')
const { Offers, Users } = require('../models')

module.exports = function createWorkOffer(userId, title, description, photo, languages, studies, experiences, knowledges) {
    stringValidator(userId, 'userId')
    if (title) stringValidator(title, 'title')
    if (description) stringValidator(description, 'description')
    if (photo) stringValidator(photo, 'photo')
    if (languages) languagesValidator(languages)
    if (studies) ofStudyValidator(studies)
    if (experiences) ofExperienceValidator(experiences)
    if (knowledges) knowledgeValidator(knowledges)

    return Users.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

            return Offers.find({ user: userId }).lean()
        })
        .then(offers => {
            if (offers.length >= 3) throw new ConflictError('Your cant have more than 3 offers')

            const data = { createDate: new Date(), user: userId }

            if (title) data.title = title
            if (description) data.description = description
            if (photo) data.photo = photo
            if (languages) data.languages = languages
            if (studies) data.studies = studies
            if (experiences) data.experiences = experiences
            if (knowledges) data.knowledges = knowledges
            data.published = false

            return Offers.create(data)
        })
}