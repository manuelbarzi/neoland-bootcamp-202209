const {
  errors: { FormatError, LengthError, ConflictError, UnexpectedError },
  regex: { IS_EMAIL_REGEX, HAS_SPACES_REGEX, IS_ALPHABETICAL_REGEX }
} = require('com')
const { Game } = require('../models')

function createGame(userId) {
  if (typeof userId !== 'string') throw new TypeError('userId is not a string')
  if (!userId.length) throw new FormatError('userId is empty')

  return Game.findOne({ players: userId, status: "playing" })
    .then(previousGame => {
      if (previousGame) {
        throw new FormatError('This user have a game')
      }

      return Game.findOne({ players: userId, status: "creating" })
        .then(previousGame => {
          if (previousGame) {
            throw new FormatError('This user have a game')
          }

          return Game.findOne({ players: { $size: 1 }, status: "creating" })
            .then(game => {
              if (!game) {
                return Game.count()
                  .then(count => {

                    return Game.create({ players: [userId] })
                  })

              } else {
                game.players.push(userId)
                game.status = "playing"
                return game.save()
              }
            })
        })
    })
  
}

module.exports = createGame