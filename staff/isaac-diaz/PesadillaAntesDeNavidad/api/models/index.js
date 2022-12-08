const { model } = require('mongoose')
const { users, vehicles } = require('./schemas')

const Users = model('Users', users)
const Vehicles = model('Vehicles', vehicles)

module.exports = {
    Users,
    Vehicles
}