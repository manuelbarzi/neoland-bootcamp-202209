const {
    errors: { NotFoundError, ConflictError, ContentError },
    validators: { stringValidator }
} = require('com')
const { Users, Curriculums } = require('../models')
/**
 * Retrieves all user curriculums
 * 
 * @param {string} userId The user id
 */
module.exports = function searchCurriculums(userId, keyWord, location) {
    stringValidator(userId, 'userId')
    if (keyWord) stringValidator(keyWord, 'key word')
    if (location) stringValidator(location, 'location')
    if (!keyWord && !location) throw new ContentError('introduce a field to search')

    return Users.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

            if (user.role !== 'company')
                throw new ConflictError('user is not a company')

            return Curriculums.find({
                $and: [
                    { 'published': true },
                    { 'location': location || '' }
                ],
                $or: [
                    { 'title': keyWord || '' },
                    {
                        'experiences.position': [keyWord] || ''
                    },
                    {
                        'studies.institution': [keyWord] || ''
                    },
                    {
                        'studies.title': [keyWord] || ''
                    },
                    {
                        'knowledges.title': [keyWord] || ''
                    },
                    {
                        'languages.language': [keyWord] || ''
                    }
                ]
            }).sort({ createDate: -1 }).populate('user', 'name').select('-__v').lean()
        })
        .then(curriculums => {
            curriculums.forEach(curriculum => {
                if (!curriculum.user.id) {
                    curriculum.user.id = curriculum.user._id.toString()
                    delete curriculum.user._id
                }

                curriculum.id = curriculum._id.toString()
                delete curriculum._id
            })

            return curriculums
        })
}