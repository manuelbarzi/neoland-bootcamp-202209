const { LengthError } = require("../errors")

module.exports = (token) => {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (!token.length) throw new LengthError('token is empty')
}