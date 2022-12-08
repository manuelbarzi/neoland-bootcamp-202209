const { LengthError } = require("../errors")

module.exports = function ofExperienceValidator(ofExperiences) {
    ofExperiences.forEach(ofExperience => {
        if (typeof ofExperience.position !== 'string') throw new TypeError('position is not a string')
        if (!ofExperience.position.length) throw new LengthError('position is empty')

        if (typeof ofExperience.industry !== 'string') throw new TypeError('industry is not a string')
        if (!ofExperience.industry.length) throw new LengthError('industry is empty')
    })
}