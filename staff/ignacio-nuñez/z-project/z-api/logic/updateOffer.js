const {
    errors: { NotFoundError, ConflictError },
    validators: { stringValidator, languagesValidator, ofStudyValidator, experienceValidator, 
        knowledgeValidator, booleanValidator, modalityValidator, salaryValidator, workTimeValidator, 
        titleValidator, descriptionValidator } } = require('com')
const { Users, Offers } = require('../models')

module.exports = function updateOffer(userId, offerId, title, description, photo, modality, location, salary, workTime, languages, studies, experiences, knowledges, published) {
    stringValidator(userId, 'userId')
    stringValidator(offerId, 'offerId')
    if (title) titleValidator(title, 'title')
    if (description) descriptionValidator(description)
    if (photo) stringValidator(photo, 'photo')
    if (modality) modalityValidator(modality)
    if (location) stringValidator(location)
    if (salary) salaryValidator(salary)
    if (workTime) workTimeValidator(workTime)
    if (languages) languagesValidator(languages)
    if (studies) ofStudyValidator(studies)
    if (experiences) experienceValidator(experiences)
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
            if (description || description === '') data.description = description
            if (photo) data.photo = photo
            if (modality) data.modality = modality
            if (location) data.location = location
            if (salary) data.salary = salary
            if (workTime) data.workTime = workTime
            if (languages) data.languages = languages
            if (studies) data.studies = studies
            if (experiences) data.experiences = experiences
            if (experiences) data.experiences = experiences
            if (knowledges) data.knowledges = knowledges
            if (typeof published === 'boolean') data.published = published

            return Offers.findByIdAndUpdate(offerId, data)
        })
}
