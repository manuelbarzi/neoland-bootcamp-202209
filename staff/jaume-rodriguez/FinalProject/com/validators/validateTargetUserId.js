const { LengthError } = require("../errors")

module.exports = (targetUserId) => {
    if (typeof targetUserId !== 'string') throw new TypeError('targetUserId is not a string')
    if (!targetUserId.length) throw new LengthError('targetUserId is empty')
}