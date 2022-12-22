const {
    errors: { FormatError, LengthError, NotFoundError, AuthError },
    regex: { IS_EMAIL_REGEX, HAS_SPACES_REGEX }
    } = require('com')
    const { Game, GameAliens } = require('../models')

function finishGame(gameId){
    if (typeof gameId !== 'string') throw new TypeError('gameId is not a string')
    if (!gameId.length) throw new FormatError('gameId is empty')
    if (typeof playerOne !== 'string') throw new TypeError('playerOne is not a string')
    if (!playerOne.length) throw new FormatError('playerOne is empty')
    if (typeof playerTwo !== 'string') throw new TypeError('playerTwo is not a string')
    if (!playerTwo.length) throw new FormatError('playerTwo is empty')

    const value = gameId.toString()

    return Game.findByIdAndUpdate({_id: value}, {status: 'finished'})
}

module.exports = finishGame