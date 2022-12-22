const { model } = require('mongoose')
const { user, news } = require('./schemas')

const User = model('user', user)
const News = model('news', news)

module.exports = {
    User, 
    News
}