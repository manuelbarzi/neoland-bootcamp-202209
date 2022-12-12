const { model } = require('mongoose')
const { user, notice, event } = require('./schemas')

const User = model('User', user)
const Notice = model('Notice', notice)
const Event = model('Event', event)


module.exports = {
    User, 
    Notice,
    Event
}