const {
    errors: { FormatError, LengthError, ConflictError, UnexpectedError },
    regex: { IS_EMAIL_REGEX, HAS_SPACES_REGEX, IS_ALPHABETICAL_REGEX }
} = require('com')
const { Aliens, GameAliens, Game } = require('../models')
const { game } = require('../models/schemas')


function pushAliens(gameId) {
    if (typeof gameId !== 'string') throw new TypeError('gameId is not a string')
    if (!gameId.length) throw new FormatError('gameId is empty')

    gameId.toString()

    Game.findOne({gameId})
        .then(game =>{
            playerOne = game.players[0]._id.toString()
            playerTwo = game.players[1]._id.toString()

            if(playerOne !== undefined && playerTwo !== undefined){
                return GameAliens.find({player: playerOne})
                .then(gameAliens => {
                    return GameAliens.find({player: playerTwo})
                    .then(gameAliens2 => {
                        return Game.findByIdAndUpdate({ gameId, aliensPlayerOne: [gameAliens[0]._id, gameAliens[1]._id, gameAliens[2]._id, gameAliens[3]._id, gameAliens[4]._id], aliensPlayerTwo: [gameAliens2[0]._id, gameAliens2[1]._id, gameAliens2[2]._id, gameAliens2[3]._id, gameAliens2[4]._id]})
                        .then({})
                    })
                })
            }
        })
}

module.exports = pushAliens