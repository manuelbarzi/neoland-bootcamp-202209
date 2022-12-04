const { model } = require('mongoose')
const { user, game } = require('./schemas')

const User = model('User', user)
const Game = model('Game', game)

module.exports = {
    User,
    Game
}