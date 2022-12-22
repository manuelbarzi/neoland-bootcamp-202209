const { FormatError, LengthError } = require("../errors")
const { HAS_SPACES_REGEX } = require("../regex")

module.exports = (password) => {
    if (typeof password !== 'string') throw new TypeError('password is not a string')
    if (!password.length) throw new LengthError('password is empty')
    if (password.length < 9) throw new LengthError('password length is less than 9')
    if (HAS_SPACES_REGEX.test(password)) throw new FormatError('password has spaces')
}