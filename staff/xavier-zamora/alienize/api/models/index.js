const { model } = require('mongoose')
const { user, game, gameAliens, aliens } = require('./schemas')

const User = model('User', user)
const Game = model('Game', game)
const GameAliens = model('gameAliens', gameAliens)
const Aliens = model('Aliens', aliens)

module.exports = {
    User,
    Game,
    GameAliens,
    Aliens,
}