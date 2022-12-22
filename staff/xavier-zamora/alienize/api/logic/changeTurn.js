const {
    errors: { FormatError, LengthError, NotFoundError, AuthError },
    regex: { IS_EMAIL_REGEX, HAS_SPACES_REGEX }
} = require('com')
const { Game } = require('../models')

function changeTurn(userId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId.length) throw new FormatError('userId is empty')

    return Game.findOne({ players: userId })
        .then(game => {
            if(game === null) throw new TypeError('game not exist')
            const players = game.players
            const turn = game.turn
            const id = game._doc._id
            if(game._doc.hasTurn === false){
                return Game.findByIdAndUpdate({ _id: id }, {players: players, hasTurn: true, turn: turn + 1})
            }
            if(game._doc.hasTurn === true){
                return Game.findByIdAndUpdate({ _id: id }, {players: players, hasTurn: false, turn: turn + 1})
            }
        })
}

module.exports = changeTurn