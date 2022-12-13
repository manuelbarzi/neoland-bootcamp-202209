const {
    errors: { NotFoundError, ConflictError },
    validators: { stringValidator, languagesValidator, experienceValidator, cvStudyValidator, knowledgeValidator }
} = require('com')
const { Curriculums, Users } = require('../models')

module.exports = function createCurriculum(userId, title, description, photo, languages, studies, experiences, knowledges) {
    stringValidator(userId, 'userId')
    if (title) stringValidator(title, 'title')
    if (description) stringValidator(description, 'description')
    if (photo) stringValidator(photo, 'photo')
    if (languages) languagesValidator(languages)
    if (studies) cvStudyValidator(studies)
    if (experiences) experienceValidator(experiences)
    if (knowledges) knowledgeValidator(knowledges)

    return Users.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

            if (user.role !== 'worker')
                throw new ConflictError(`user ${user._id} does not have a worker role`)

            return Curriculums.find({ user: userId }).lean()
        })
        .then(curriculums => {
            if (curriculums.length >= 3) throw new ConflictError('Your cant have more than 3 curriculums')

            const data = { createDate: new Date(), user: userId }

            if (title) data.title = title
            if (description) data.description = description
            if (photo) data.photo = photo
            if (languages) data.languages = languages
            if (studies) data.studies = studies
            if (experiences) data.experiences = experiences
            if (knowledges) data.knowledges = knowledges
            data.published = false

            return Curriculums.create(data)
        })
}