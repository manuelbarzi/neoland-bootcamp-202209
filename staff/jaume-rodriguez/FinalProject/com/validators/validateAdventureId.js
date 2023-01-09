const { LengthError } = require("../errors")

module.exports = (adventureId) => {
    if (typeof adventureId !== 'string') throw new TypeError('adventureId is not a string')
    if (!adventureId.length) throw new LengthError('adventureId is empty')
}