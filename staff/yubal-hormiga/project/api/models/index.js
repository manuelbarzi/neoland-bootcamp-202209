const { model } = require('mongoose')
const { user, appointment } = require('./schemas')

const User = model('User', user)
const Appointment = model('Appointment', appointment)

module.exports = {
    User,
    Appointment
}