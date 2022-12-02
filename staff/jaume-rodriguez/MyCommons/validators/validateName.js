const { FormatError, LengthError } = require("../errors")
const { IS_ALPHABETICAL_REGEX } = require("../regex")

module.exports = (name) => {
    if (typeof name !== 'string') throw new TypeError('name is not a string')
    if (!IS_ALPHABETICAL_REGEX.test(name)) throw new FormatError('name is not alphabetical')
    if (name.length < 1) throw new LengthError('name length is less than 1')
}