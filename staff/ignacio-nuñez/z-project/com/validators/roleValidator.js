const { LengthError, FormatError } = require("../errors")

module.exports = function roleValidator(role){
    if (typeof role !== 'string') throw new TypeError('role is not a string')
    if (!role.length) throw new LengthError('role is empty')
    if (role !== 'worker' && role !== 'company') throw new FormatError('invalid role')
}