const { LengthError } = require("../errors")

module.exports = (isMainAdventure) => {
    if (typeof isMainAdventure !== 'string') throw new TypeError('isMainAdventure is not a string')
    if (!isMainAdventure.length) throw new LengthError('isMainAdventure is empty')
}