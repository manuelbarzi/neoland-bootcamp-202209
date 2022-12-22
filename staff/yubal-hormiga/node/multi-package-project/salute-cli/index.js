const salute = require('salute')

const [, , from, to] = process.argv

console.log(salute(from, to))