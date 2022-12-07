const { model } = require('mongoose')
const { user, notice } = require('./schemas')

const User = model('User', user)
const Notice = model('Notice', notice)


module.exports = {
    User, 
    Notice
}