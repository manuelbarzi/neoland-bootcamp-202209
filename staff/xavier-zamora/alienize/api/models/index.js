const { model } = require('mongoose')
const { user, game } = require('./schemas')

const User = model('User', user)
const Game = model('Game', game)
const Atack = model('Atack', game)
const Alien = model('Alien', game)
const Card = model('Card', game)

module.exports = {
    User,
    Game,
    Atack,
    Alien,
    Card
}