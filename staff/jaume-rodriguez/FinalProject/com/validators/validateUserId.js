const { LengthError } = require("../errors")

module.exports = (userId) => {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new LengthError('userId is empty')
}