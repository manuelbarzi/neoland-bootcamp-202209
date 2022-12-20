const {
  errors: { FormatError, LengthError, NotFoundError, AuthError },
  regex: { IS_EMAIL_REGEX, HAS_SPACES_REGEX }
  } = require('com')
  const { Game } = require('../models')

  function deadAlien(userId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId) throw new FormatError('userId is empty')

    return Game.findOne({ players: userId })
    .then(game => {
        if (game.players[0].toString() === userId){
          const alienTwoPlayerOne = game.aliensPlayerOne[1]
          const alienThreePlayerOne = game.aliensPlayerOne[2]
          const alienFourtPlayerOne = game.aliensPlayerOne[3]
          const alienFivePlayerOne = game.aliensPlayerOne[4]

          const arrAliens = [alienTwoPlayerOne, alienThreePlayerOne, alienFourtPlayerOne, alienFivePlayerOne]
          const filtered = arrAliens.filter(function(x) {
            return x !== undefined
          })

          return Game.findOneAndUpdate({players: userId}, {aliensPlayerOne: filtered}) 
            .then(game => {})
        }
            
        if (game.players[1].toString() === userId){
        const alienTwoPlayerOne = game.aliensPlayerOne[1]
        const alienThreePlayerOne = game.aliensPlayerOne[2]
        const alienFourtPlayerOne = game.aliensPlayerOne[3]
        const alienFivePlayerOne = game.aliensPlayerOne[4]

        const arrAliens = [alienTwoPlayerOne, alienThreePlayerOne, alienFourtPlayerOne, alienFivePlayerOne]
        const filtered = arrAliens.filter(function(x) {
          return x !== undefined
        })

        return Game.findOneAndUpdate({players: userId}, {aliensPlayerOne: filtered}) 
          .then(game => {})
      }
    })
  }


  module.exports = deadAlien