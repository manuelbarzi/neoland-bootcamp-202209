const {
  errors: { FormatError, LengthError, NotFoundError, AuthError },
  regex: { IS_EMAIL_REGEX, HAS_SPACES_REGEX }
  } = require('com')
  const { Game, GameAliens } = require('../models')
const { gameAliens } = require('../models/schemas')
const changeTurn = require('./changeTurn')
const finishGame = require('./finishGame')

  function deadAlien(userId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (!userId) throw new FormatError('userId is empty')

    return Game.findOne({ players: userId })
    .then(game => {
        const playerOne = game.players[0].toString()
        const playerTwo = game.players[1].toString()
      
        if (game.players[1].toString() === userId){

          const gameId = game._id.toString()

          if(!gameId) throw new TypeError('Not game id')

          const alienTwoPlayerOne = game.aliensPlayerOne[1]
          const alienThreePlayerOne = game.aliensPlayerOne[2]
          const alienFourtPlayerOne = game.aliensPlayerOne[3]
          const alienFivePlayerOne = game.aliensPlayerOne[4]

          const arrAliens = [alienTwoPlayerOne, alienThreePlayerOne, alienFourtPlayerOne, alienFivePlayerOne]
          const filtered = arrAliens.filter(function(x) {
            return x !== undefined
          })

          if(arrAliens.length === 0) finishGame(gameId, playerOne, playerTwo)
          else return Game.findOneAndUpdate({_id: gameId}, {aliensPlayerOne: filtered}) 
            .then(game => {
              changeTurn(userId)
            })
            
        }
            
        if (game.players[0].toString() === userId){

        const gameId = game._id.toString()

        if(!gameId) throw new TypeError('Not game id')

        const alienTwoPlayerTwo = game.aliensPlayerTwo[1]
        const alienThreePlayerTwo = game.aliensPlayerTwo[2]
        const alienFourtPlayerTwo = game.aliensPlayerTwo[3]
        const alienFivePlayerTwo = game.aliensPlayerTwo[4]

        const arrAliens = [alienTwoPlayerTwo, alienThreePlayerTwo, alienFourtPlayerTwo, alienFivePlayerTwo]
        const filtered = arrAliens.filter(function(x) {
          return x !== undefined
        })

        if(arrAliens.length === 0) finishGame(gameId, playerOne, playerTwo)
        else return Game.findOneAndUpdate({_id: gameId}, {aliensPlayerTwo: filtered}) 
          .then(game => {
            changeTurn(userId)
          })
      }
    })
  }


  module.exports = deadAlien