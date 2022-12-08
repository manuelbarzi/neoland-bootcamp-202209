const { LengthError, FormatError } = require("../errors")

module.exports = function languageValidator(languages){
    languages.forEach(language =>{
        if(typeof language.language !== 'string') throw new TypeError('language is not a string')
        if(!language.language.length) throw new LengthError('language is empty')

        if(typeof language.level !== 'string') throw new TypeError('level is not a string')
        if(language.level !== 'A1' && language.level !== 'A2' && language.level !== 'B1'&& language.level !== 'B2' &&
        language.level !== 'C1' && language.level !== 'C2') throw new FormatError('invalid level')
    })
}