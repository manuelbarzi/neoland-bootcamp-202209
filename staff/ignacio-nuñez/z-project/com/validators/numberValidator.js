const { LengthError } = require("../errors")

module.exports = function numberValidator(number, value = 'number'){
    if (typeof number !== 'number') throw new TypeError(`${value} is not a number`)
    if (!number.length) throw new LengthError(`${value} does not have length`)
}