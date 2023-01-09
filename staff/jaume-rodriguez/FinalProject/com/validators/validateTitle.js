const { LengthError } = require("../errors")

module.exports = (title) => {
    if (typeof title !== 'string') throw new TypeError('title is not a string')
    if (!title.length) throw new LengthError('title is empty')
    if (title.length > 14) throw new LengthError('The max character limit is 14')
}