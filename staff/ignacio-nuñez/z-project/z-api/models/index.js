const { model } = require('mongoose')
const { users, offers, curriculums } = require('./schemas')

const Users = model('Users', users)
const Offers = model('Offers', offers)
const Curriculums = model('Curriculums', curriculums)

module.exports = {
    Users,
    Offers,
    Curriculums
}