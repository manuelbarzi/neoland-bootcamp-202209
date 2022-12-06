const { errors: { FormatError } } = require('com')
const { User, Game } = require('../models')
const chop = require('./atacks/chop')

function atack1(userId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new FormatError('userId is empty')

    return Game.findOne({players: userId})
     .then(game => {
        if(game.players[0]._id.toString() === userId /*&& game.aliensPlayerOne[0].atack1 === "chop"*/) chop(game.aliensPlayerOne[0], game.aliensPlayerTwo[0])
        if(game.players[1]._id.toString() === userId /*&& game.aliensPlayerOne[1].atack1 === "Ignite"*/) chop(game.aliensPlayerOne[1], game.aliensPlayerTwo[1])
      })
}

module.exports = atack1