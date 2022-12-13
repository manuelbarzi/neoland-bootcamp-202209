const {
    errors: { NotFoundError, ConflictError },
    validators: { stringValidator, languagesValidator, experienceValidator, ofStudyValidator, knowledgeValidator, 
        modalityValidator, numberValidator, workTimeValidator }
} = require('com')
const { Offers, Users } = require('../models')

module.exports = function createOffer(userId, title, description, photo, modality, location, salary, workTime, languages, studies, experiences, knowledges) {
    stringValidator(userId, 'userId')
    if (title) stringValidator(title, 'title')
    if (description) stringValidator(description, 'description')
    if (photo) stringValidator(photo, 'photo')
    if (modality) modalityValidator(modality)
    if (location) stringValidator(location)
    if (salary) numberValidator(salary)
    if (workTime) workTimeValidator(workTime)
    if (languages) languagesValidator(languages)
    if (studies) ofStudyValidator(studies)
    if (experiences) experienceValidator(experiences)
    if (knowledges) knowledgeValidator(knowledges)

    return Users.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

            if (user.role !== 'company')
                throw new ConflictError(`user ${user._id} does not have a company role`)

            return Offers.find({ user: userId }).lean()
        })
        .then(offers => {
            if (offers.length >= 3) throw new ConflictError('Your cant have more than 3 offers')

            const data = { createDate: new Date(), user: userId }

            if (title) data.title = title
            if (description) data.description = description
            if (photo) data.photo = photo
            if (modality) data.modality = modality
            if (location) data.location = location
            if (salary) data.salary = salary
            if (workTime) data.workTime = workTime
            if (languages) data.languages = languages
            if (studies) data.studies = studies
            if (experiences) data.experiences = experiences
            if (knowledges) data.knowledges = knowledges
            data.published = false

            return Offers.create(data)
        })
        .then(offer => {
            offer.id = offer._id.toString()
            return offer.id
        })
}