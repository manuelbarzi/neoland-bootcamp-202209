const { model } = require('mongoose')
const { user, list, product, item } = require('./schemas')

const User = model('User', user)
const List = model('List', list)
const Item = model('Item', item)

module.exports = {
    User,
    List,
    Item
}