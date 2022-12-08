const {
    errors: { NotFoundError },
    validators: { stringValidator, languagesValidator, ofExperienceValidator, ofStudyValidator }
} = require('com')
const { Offers, Users } = require('../models')

module.exports = function createWorkOffer(userId, title, description, photo, languages, studies, experiences) {
    stringValidator(userId, 'userId')
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

            return Offers.create({ title, description, createDate: new Date(), photo, languages, studies, experiences, user: userId })
        })
}