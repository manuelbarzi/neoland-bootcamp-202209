const { model } = require('mongoose')
const { users } = require('./schemas')
const { offers } = require('./schemas')

const Users = model('Users', users)
const Offers = model('Offers', offers)

module.exports = {
    Users,
    Offers
}