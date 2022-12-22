const { LengthError } = require("../errors")

module.exports = (questId) => {
    if (typeof questId !== 'string') throw new TypeError('questId is not a string')
    if (!questId.length) throw new LengthError('questId is empty')
}