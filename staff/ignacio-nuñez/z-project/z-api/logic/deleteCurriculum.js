const {
    errors: { NotFoundError, ConflictError },
    validators: { stringValidator }
} = require('com')
const { Users, Curriculums } = require('../models')

module.exports = function deleteCurriculum(userId, curriculumId) {
    stringValidator(userId, 'userId')
    stringValidator(curriculumId, 'curriculumId')

    return Users.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

            return Curriculums.findById(curriculumId)
        })
        .then(curriculum => {
            if (!curriculum) throw new NotFoundError(`curriculum with id ${curriculumId} does not exist`)

            if (curriculum.user.toString() !== userId) throw new ConflictError(`curriculum with id ${curriculumId} does not belong to user with id ${userId}`)

            return Curriculums.findByIdAndDelete(curriculumId)
        })
}
