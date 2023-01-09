const hello = require('hello')

module.exports = function (from, to) {
    return `${from}: ${hello(to)}`
}