const { LengthError } = require("../errors")

module.exports = (text) => {
    if (typeof text !== 'string') throw new TypeError('text is not a string')
    if (!text.length) throw new LengthError('text is empty')
}