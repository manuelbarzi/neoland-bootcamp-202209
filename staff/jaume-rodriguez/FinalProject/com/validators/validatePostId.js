const { LengthError } = require("../errors")

module.exports = (postId) => {
    if (typeof postId !== 'string') throw new TypeError('postId is not a string')
    if (!postId.length) throw new LengthError('postId is empty')
}